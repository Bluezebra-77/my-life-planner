const dailyTasks = [
  { id: "wake", title: "Get up, wash and get dressed", time: "Around 7:00-8:00, depending on sleep and health" },
  { id: "coffee", title: "Coffee, breakfast and medication", time: "About 30 minutes" },
  { id: "emails", title: "Check important emails only", time: "15 minutes" },
  { id: "plan", title: "Look at today and choose one main focus", time: "5 minutes" },
  { id: "main", title: "Do one main morning task", time: "45-90 minutes while energy is best" },
  { id: "break", title: "Take a proper break", time: "Tea, food, sit down or fresh air" },
  { id: "computer", title: "Afternoon computer work", time: "30-60 minutes" },
  { id: "small", title: "Complete one small household task", time: "10-20 minutes only" }
];

const eveningTasks = [
  { id: "clear", title: "Clear one small surface", time: "5-10 minutes" },
  { id: "tomorrow", title: "Note tomorrow's most important task", time: "2 minutes" },
  { id: "stop", title: "Give myself permission to stop", time: "Rest counts" }
];

const defaultCategories = {
  photography: ["Go out for a short photography trip", "Edit five photographs", "Practise ICM or multiple exposure", "Review images from the last outing", "Watch one photography lesson"],
  decluttering: ["Declutter one drawer", "Sort one shelf", "Fill one charity bag", "Sort one small box", "Clear one visible surface"],
  vinted: ["Choose three items to sell", "Photograph three items", "Write one listing", "Publish prepared listings", "Answer messages"],
  admin: ["Sort one paperwork pile", "File five documents", "Reply to one important email", "Unsubscribe from unwanted emails", "Check one bill or appointment"],
  house: ["Bathroom: one small decorating job", "Kitchen: clear one area", "Living room: tidy one zone", "Office room: clear one work area", "Front shed: sort one box"]
};

const categoryNames = {
  photography: "Photography",
  decluttering: "Decluttering",
  vinted: "Vinted",
  admin: "Admin",
  house: "House"
};

const choicePools = {
  normal: ["Edit five photographs.", "Sort one drawer or shelf.", "Photograph three Vinted items.", "Deal with one important email or letter.", "Clear one small visible area.", "Take a short photo walk."],
  low: ["Delete ten unwanted photographs.", "Put away five things.", "Unsubscribe from three unwanted emails.", "Choose one Vinted item to list later.", "Make a drink and note tomorrow's first task."],
  quick: ["Clear one chair or small surface.", "File or shred five pieces of paper.", "Edit one photograph.", "Choose one item for Vinted.", "Set a 10-minute timer and tidy."]
};

function getData() {
  const keys = ["lifePlannerDataV9", "lifePlannerDataV8", "lifePlannerDataV7", "lifePlannerDataV4", "lifePlannerDataV3"];
  for (const key of keys) {
    const saved = localStorage.getItem(key);
    if (!saved) continue;
    try {
      const loaded = JSON.parse(saved);
      loaded.todos = loaded.todos || [];
      loaded.projects = loaded.projects || [];
      loaded.annualDates = loaded.annualDates || [];
      loaded.cleaningTasks = loaded.cleaningTasks || [];
      loaded.dailyTasks = loaded.dailyTasks || JSON.parse(JSON.stringify(dailyTasks));
      loaded.eveningTasks = loaded.eveningTasks || JSON.parse(JSON.stringify(eveningTasks));
      loaded.categoryTasks = loaded.categoryTasks || JSON.parse(JSON.stringify(defaultCategories));
      return normaliseData(loaded);
    } catch (error) {
      console.error("Could not read saved planner data", error);
    }
  }

  return {
    todos: [],
    projects: [],
    annualDates: [],
    cleaningTasks: [],
    dailyTasks: JSON.parse(JSON.stringify(dailyTasks)),
    eveningTasks: JSON.parse(JSON.stringify(eveningTasks)),
    categoryTasks: JSON.parse(JSON.stringify(defaultCategories))
  };
}

let data = getData();

const DATA_KEY = "lifePlannerDataV9";
const RECOVERY_KEY = "lifePlannerRecoveryV9";
const DAILY_BACKUP_KEY = "lifePlannerDailyBackupsV9";
const SETTINGS_KEY = "lifePlannerSettingsV9";
let saveIndicatorTimer = null;

function normaliseData(loaded = {}) {
  return {
    todos: Array.isArray(loaded.todos) ? loaded.todos : [],
    projects: Array.isArray(loaded.projects) ? loaded.projects : [],
    annualDates: Array.isArray(loaded.annualDates) ? loaded.annualDates : [],
    cleaningTasks: Array.isArray(loaded.cleaningTasks) ? loaded.cleaningTasks : [],
    dailyTasks: Array.isArray(loaded.dailyTasks) ? loaded.dailyTasks : JSON.parse(JSON.stringify(dailyTasks)),
    eveningTasks: Array.isArray(loaded.eveningTasks) ? loaded.eveningTasks : JSON.parse(JSON.stringify(eveningTasks)),
    categoryTasks: loaded.categoryTasks && typeof loaded.categoryTasks === "object"
      ? loaded.categoryTasks : JSON.parse(JSON.stringify(defaultCategories))
  };
}

function createRecoveryCopy(serialised) {
  try {
    const copies = JSON.parse(localStorage.getItem(RECOVERY_KEY) || "[]");
    if (copies[0]?.data === serialised) return;
    copies.unshift({ savedAt: new Date().toISOString(), data: serialised });
    localStorage.setItem(RECOVERY_KEY, JSON.stringify(copies.slice(0, 5)));
  } catch (error) {
    console.warn("Could not create recovery copy", error);
  }
}

const defaultSettings = { ownerName: "", colourTheme: "sage", fontChoice: "clean" };
let plannerSettings = loadSettings();

function loadSettings() {
  try { return { ...defaultSettings, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}") }; }
  catch { return { ...defaultSettings }; }
}

function todayKey() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function getDailyBackups() {
  try {
    const list = JSON.parse(localStorage.getItem(DAILY_BACKUP_KEY) || "[]");
    return Array.isArray(list) ? list : [];
  } catch { return []; }
}

function updateDailyBackup(serialised) {
  try {
    const date = todayKey();
    let list = getDailyBackups().filter(item => item && item.date !== date);
    list.unshift({ date, savedAt: new Date().toISOString(), data: serialised });
    list = list.sort((a,b) => b.date.localeCompare(a.date)).slice(0, 5);
    localStorage.setItem(DAILY_BACKUP_KEY, JSON.stringify(list));
  } catch (error) {
    console.warn("Could not update daily backup", error);
  }
}

function applySettings() {
  document.body.dataset.theme = plannerSettings.colourTheme;
  document.body.dataset.font = plannerSettings.fontChoice;
  const title = document.getElementById("plannerTitle");
  if (title) {
    const name = plannerSettings.ownerName.trim();
    title.innerHTML = `${name ? escapeHtml(name) + "'s " : "My "}Life Planner <span class="version-badge">v9</span>`;
  }
  const nameInput = document.getElementById("ownerName");
  const themeInput = document.getElementById("colourTheme");
  const fontInput = document.getElementById("fontChoice");
  if (nameInput) nameInput.value = plannerSettings.ownerName;
  if (themeInput) themeInput.value = plannerSettings.colourTheme;
  if (fontInput) fontInput.value = plannerSettings.fontChoice;
}

function openSettings(section = "") {
  applySettings();
  renderDailyBackups();
  const dialog = document.getElementById("settingsDialog");
  dialog.showModal();
  if (section === "backups") setTimeout(() => document.getElementById("dailyBackupsSection")?.scrollIntoView({behavior:"smooth"}), 100);
}

function closeSettings() { document.getElementById("settingsDialog").close(); }

function saveSettings() {
  plannerSettings = {
    ownerName: document.getElementById("ownerName").value.trim(),
    colourTheme: document.getElementById("colourTheme").value,
    fontChoice: document.getElementById("fontChoice").value
  };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(plannerSettings));
  applySettings();
  showSaved("Settings saved");
}

function renderDailyBackups() {
  const area = document.getElementById("dailyBackupList");
  if (!area) return;
  const list = getDailyBackups();
  if (!list.length) {
    area.innerHTML = '<div class="empty-state">Your first daily backup will appear after the planner saves.</div>';
    return;
  }
  area.innerHTML = list.map(item => {
    const date = new Date(item.date + "T12:00:00").toLocaleDateString("en-GB", {weekday:"short", day:"numeric", month:"short", year:"numeric"});
    const time = new Date(item.savedAt).toLocaleTimeString("en-GB", {hour:"2-digit", minute:"2-digit"});
    return `<div class="list-card backup-card"><div><strong>${date}</strong><div class="card-meta">Latest save at ${time}</div></div><button type="button" class="secondary-button" onclick="restoreDailyBackup('${item.date}')">Restore</button></div>`;
  }).join("");
}

function restoreDailyBackup(date) {
  const item = getDailyBackups().find(entry => entry.date === date);
  if (!item) return alert("That backup is no longer available.");
  const label = new Date(date + "T12:00:00").toLocaleDateString("en-GB", {day:"numeric", month:"long", year:"numeric"});
  if (!confirm(`Restore the backup from ${label}? A safety copy of your current planner will be made first.`)) return;
  try {
    createRecoveryCopy(JSON.stringify(data));
    data = normaliseData(JSON.parse(item.data));
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
    updateDailyBackup(JSON.stringify(data));
    renderAll();
    renderDailyBackups();
    showSaved("Daily backup restored");
  } catch { alert("That backup could not be restored."); }
}

function showSaved(message = "Saved on this device") {
  const indicator = document.getElementById("saveIndicator");
  if (!indicator) return;
  indicator.textContent = message;
  indicator.classList.add("saved");
  clearTimeout(saveIndicatorTimer);
  saveIndicatorTimer = setTimeout(() => indicator.classList.remove("saved"), 1800);
}

function saveData() {
  try {
    data = normaliseData(data);
    const serialised = JSON.stringify(data);
    createRecoveryCopy(serialised);
    localStorage.setItem(DATA_KEY, serialised);
    updateDailyBackup(serialised);
    updateStorageStatus();
    renderDailyBackups();
    showSaved();
  } catch (error) {
    console.error("Could not save planner data", error);
    const indicator = document.getElementById("saveIndicator");
    if (indicator) indicator.textContent = "Save failed — export a backup";
    alert("The planner could not save. Please use Export backup and check that Safari is not in Private Browsing.");
  }
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function storageKey(group, id) {
  return `lifePlanner:${group}:${id}`;
}

function dateOnly(value) {
  if (!value) return null;
  const date = new Date(value + "T12:00:00");
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(value, includeYear = true) {
  const date = dateOnly(value);
  if (!date) return "";
  return date.toLocaleDateString("en-GB", includeYear
    ? { day: "numeric", month: "short", year: "numeric" }
    : { day: "numeric", month: "short" });
}

function daysBetween(from, to) {
  const day = 86400000;
  return Math.ceil((to - from) / day);
}

function nextAnnualOccurrence(monthDay) {
  if (!monthDay) return null;
  const [month, day] = monthDay.split("-").map(Number);
  const today = new Date();
  today.setHours(12,0,0,0);
  let result = new Date(today.getFullYear(), month - 1, day, 12);
  if (result < today) result = new Date(today.getFullYear() + 1, month - 1, day, 12);
  return result;
}

function getTimingText(item) {
  if (item.timingType === "ongoing") return "Ongoing";
  if (item.dueDate) return `Due ${formatDate(item.dueDate)}`;
  return "No deadline";
}

function getBadge(item) {
  if (item.timingType === "ongoing") return { text: "Ongoing", cls: "ongoing" };
  if (!item.dueDate) return { text: "No date", cls: "" };
  const today = new Date(); today.setHours(12,0,0,0);
  const days = daysBetween(today, dateOnly(item.dueDate));
  if (days < 0) return { text: `Overdue by ${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"}`, cls: "overdue" };
  if (days === 0) return { text: "Due today", cls: "due" };
  return { text: `Due in ${days} day${days === 1 ? "" : "s"}`, cls: "due" };
}

function createTaskRow(task, group, editable = false) {
  const wrapper = document.createElement("div");
  wrapper.className = "editable-task";

  const label = document.createElement("label");
  label.className = "task-row";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = localStorage.getItem(storageKey(group, task.id)) === "true";
  const copy = document.createElement("span");
  copy.className = "task-copy";
  copy.innerHTML = `<span class="task-title">${escapeHtml(task.title)}</span><span class="task-time">${escapeHtml(task.time || "")}</span>`;
  label.append(checkbox, copy);

  function refresh() { label.classList.toggle("completed", checkbox.checked); }
  checkbox.addEventListener("change", () => {
    localStorage.setItem(storageKey(group, task.id), checkbox.checked);
    refresh();
    updateProgress();
  });
  refresh();
  wrapper.appendChild(label);

  if (editable) {
    const actions = document.createElement("div");
    actions.className = "mini-actions";
    actions.innerHTML = `
      <button type="button" class="small-button" onclick="editRoutineTask('${group}','${task.id}')">Edit</button>
      <button type="button" class="small-button danger-button" onclick="deleteRoutineTask('${group}','${task.id}')">Delete</button>`;
    wrapper.appendChild(actions);
  }
  return wrapper;
}

function renderChecklist(containerId, tasks, group, editable = false) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  if (!tasks.length) {
    container.innerHTML = `<div class="empty-state">No tasks yet. Use Add task.</div>`;
    return;
  }
  tasks.forEach(task => container.appendChild(createTaskRow(task, group, editable)));
}

function updateProgress() {
  const all = document.querySelectorAll("#dailyChecklist input, #eveningChecklist input");
  const completed = [...all].filter(item => item.checked).length;
  const total = all.length;
  document.getElementById("progressBar").style.width = `${total ? Math.round(completed / total * 100) : 0}%`;
  document.getElementById("progressText").textContent = `${completed} of ${total}`;
}

function setDate() {
  document.getElementById("todayDate").textContent = new Date().toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });
}

function resetDailyTasks() {
  if (!confirm("Untick all Daily Rhythm and evening tasks for today?")) return;
  [...data.dailyTasks, ...data.eveningTasks].forEach(task => localStorage.removeItem(storageKey("daily", task.id)));
  renderAll();
  showSaved("Today reset");
}

function savedChoiceItems() {
  return [
    ...data.todos.filter(x => !x.completed).map(x => x.name),
    ...data.projects.filter(x => !x.completed).map(x => x.name),
    ...data.projects.flatMap(p => p.steps.filter(s => !s.completed).map(s => s.name)),
    ...Object.values(data.categoryTasks || {}).flat(),
    ...data.cleaningTasks.filter(x => isDueTodayOrEarlier(x.nextDue)).map(x => x.name)
  ].filter(Boolean);
}

function chooseFrom(poolName) {
  const saved = savedChoiceItems();
  let pool = choicePools[poolName] || [];
  if (poolName === "normal") pool = [...saved, ...choicePools.normal];
  if (poolName === "low") pool = [...data.dailyTasks.slice(-3).map(x => x.title), ...choicePools.low];
  if (poolName === "quick") pool = [...(data.categoryTasks?.admin || []).slice(0,2), ...choicePools.quick];
  pool = pool.filter(Boolean);
  const card = document.getElementById("choiceCard");
  card.textContent = pool.length
    ? pool[Math.floor(Math.random() * pool.length)]
    : "There are no available tasks yet. Add one to a list first.";
}

function chooseForMe() { chooseFrom("normal"); }
function chooseLowEnergy() { chooseFrom("low"); }
function chooseQuickWin() { chooseFrom("quick"); }

function showCategory(categoryKey) {
  const area = document.getElementById("categoryArea");
  area.innerHTML = `<h3>${categoryNames[categoryKey]}</h3>`;
  const list = document.createElement("div");
  list.className = "checklist";
  (data.categoryTasks[categoryKey] || []).forEach((taskText, index) => {
    list.appendChild(createTaskRow({ id: `${categoryKey}-${index}`, title: taskText, time: "Tick when completed" }, `category:${categoryKey}`));
  });
  area.appendChild(list);
}




function togglePanel(areaId, buttonId) {
  const area = document.getElementById(areaId);
  const button = document.getElementById(buttonId);
  if (!area || !button) return;
  const hidden = area.classList.toggle("collapsed-content");
  button.textContent = hidden ? "Show" : "Hide";
  localStorage.setItem(`lifePlannerPanel:${areaId}`, hidden ? "hidden" : "shown");
}

function restorePanelStates() {
  [["todayRemindersArea","todayToggle"],["weeklyArea","weekToggle"]].forEach(([areaId,buttonId]) => {
    const hidden = localStorage.getItem(`lifePlannerPanel:${areaId}`) === "hidden";
    const area = document.getElementById(areaId);
    const button = document.getElementById(buttonId);
    if (area) area.classList.toggle("collapsed-content", hidden);
    if (button) button.textContent = hidden ? "Show" : "Hide";
  });
}

let managedRoutineGroup = "daily";
const routineManagerDialog = document.getElementById("routineManagerDialog");

function openRoutineManager(group) {
  managedRoutineGroup = group;
  document.getElementById("routineManagerTitle").textContent = group === "evening" ? "Manage Gentle close-down" : "Manage Daily rhythm";
  document.getElementById("routineNewName").value = "";
  document.getElementById("routineNewTime").value = "";
  renderRoutineManager();
  routineManagerDialog.showModal();
}

function closeRoutineManager() { routineManagerDialog.close(); }

function renderRoutineManager() {
  const area = document.getElementById("routineManagerList");
  const list = routineList(managedRoutineGroup);
  area.innerHTML = "";
  if (!list.length) {
    area.innerHTML = '<div class="empty-state">No items yet. Add one below.</div>';
    return;
  }
  list.forEach(item => {
    const row = document.createElement("div");
    row.className = "manager-row";
    row.innerHTML = `<div><strong>${escapeHtml(item.title)}</strong>${item.time ? `<div class="card-meta">${escapeHtml(item.time)}</div>` : ""}</div>
      <div class="mini-actions">
        <button type="button" class="small-button" onclick="editRoutineInManager('${item.id}')">Edit</button>
        <button type="button" class="small-button danger-button" onclick="deleteRoutineInManager('${item.id}')">Delete</button>
      </div>`;
    area.appendChild(row);
  });
}

function addRoutineFromManager() {
  const nameInput = document.getElementById("routineNewName");
  const timeInput = document.getElementById("routineNewTime");
  const title = nameInput.value.trim();
  if (!title) { nameInput.focus(); return; }
  routineList(managedRoutineGroup).push({ id: uid(), title, time: timeInput.value.trim() });
  saveData();
  nameInput.value = "";
  timeInput.value = "";
  renderRoutineManager();
  renderAll();
}

function editRoutineInManager(id) {
  const item = routineList(managedRoutineGroup).find(x => x.id === id);
  if (!item) return;
  const title = prompt("Edit item", item.title);
  if (title === null || !title.trim()) return;
  const note = prompt("Edit note or time", item.time || "");
  if (note === null) return;
  item.title = title.trim();
  item.time = note.trim();
  saveData();
  renderRoutineManager();
  renderAll();
}

function deleteRoutineInManager(id) {
  const item = routineList(managedRoutineGroup).find(x => x.id === id);
  if (!item || !confirm(`Delete "${item.title}"?`)) return;
  if (managedRoutineGroup === "evening") data.eveningTasks = data.eveningTasks.filter(x => x.id !== id);
  else data.dailyTasks = data.dailyTasks.filter(x => x.id !== id);
  localStorage.removeItem(storageKey("daily", id));
  saveData();
  renderRoutineManager();
  renderAll();
}

function routineList(group) {
  return group === "evening" ? data.eveningTasks : data.dailyTasks;
}

function editRoutineTask(group, id) {
  const item = routineList(group).find(x => x.id === id);
  if (!item) return;
  clearForm();
  itemType.value = group;
  document.getElementById("editingId").value = item.id;
  document.getElementById("itemName").value = item.title || "";
  document.getElementById("itemDetails").value = item.time || "";
  document.getElementById("dialogTitle").textContent = group === "evening" ? "Edit evening task" : "Edit daily task";
  updateFormVisibility();
  dialog.showModal();
}

function deleteRoutineTask(group, id) {
  const list = routineList(group);
  const item = list.find(x => x.id === id);
  if (!item) return;
  if (!confirm(`Delete "${item.title}"?`)) return;
  if (group === "evening") data.eveningTasks = list.filter(x => x.id !== id);
  else data.dailyTasks = list.filter(x => x.id !== id);
  localStorage.removeItem(storageKey("daily", id));
  saveData();
  renderAll();
}

function updateStorageStatus() {
  const status = document.getElementById("storageStatus");
  if (!status) return;
  const saved = localStorage.getItem(DATA_KEY) || localStorage.getItem("lifePlannerDataV8");
  let recoveries = 0;
  try { recoveries = JSON.parse(localStorage.getItem(RECOVERY_KEY) || "[]").length; } catch {}
  const dailyCount = getDailyBackups().length;
  status.textContent = saved
    ? `Saved privately on this device · ${dailyCount} of 5 daily backups available in Settings.`
    : "No planner information has been saved yet.";
}

function exportPlanner() {
  saveData();
  const backup = {
    app: "My Life Planner",
    version: "8A",
    exportedAt: new Date().toISOString(),
    data,
    settings: plannerSettings,
    checks: Object.fromEntries(
      Object.keys(localStorage)
        .filter(key => key.startsWith("lifePlanner:"))
        .map(key => [key, localStorage.getItem(key)])
    )
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `my-life-planner-backup-${new Date().toISOString().slice(0,10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function sharePlannerBackup() {
  saveData();
  const backup = {
    app: "My Life Planner",
    version: "8A",
    exportedAt: new Date().toISOString(),
    data,
    settings: plannerSettings,
    checks: Object.fromEntries(
      Object.keys(localStorage)
        .filter(key => key.startsWith("lifePlanner:"))
        .map(key => [key, localStorage.getItem(key)])
    )
  };
  const file = new File([JSON.stringify(backup, null, 2)],
    `my-life-planner-backup-${new Date().toISOString().slice(0,10)}.json`,
    { type: "application/json" });

  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ title: "My Life Planner backup", text: "A backup of my planner information.", files: [file] });
      showSaved("Backup shared");
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  exportPlanner();
}

function restoreLatestRecovery() {
  let copies = [];
  try { copies = JSON.parse(localStorage.getItem(RECOVERY_KEY) || "[]"); } catch {}
  if (!copies.length) {
    alert("There is no recovery copy available yet.");
    return;
  }
  const latest = copies[0];
  const date = new Date(latest.savedAt).toLocaleString("en-GB");
  if (!confirm(`Restore the recovery copy saved ${date}? Your current planner will be replaced.`)) return;
  try {
    data = normaliseData(JSON.parse(latest.data));
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
    renderAll();
    showSaved("Recovery restored");
  } catch {
    alert("That recovery copy could not be restored.");
  }
}

function importPlanner(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const backup = JSON.parse(reader.result);
      const imported = backup.data || backup;
      if (!imported || typeof imported !== "object") throw new Error("Invalid backup");
      data = normaliseData(imported);
      if (backup.settings) { plannerSettings = { ...defaultSettings, ...backup.settings }; localStorage.setItem(SETTINGS_KEY, JSON.stringify(plannerSettings)); applySettings(); }
      Object.entries(backup.checks || {}).forEach(([key, value]) => localStorage.setItem(key, value));
      saveData();
      renderAll();
      alert("Planner backup imported successfully.");
    } catch (error) {
      alert("That file is not a valid My Life Planner backup.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.getElementById("installButton")?.classList.remove("hidden");
});

async function installPlanner() {
  if (!deferredInstallPrompt) {
    alert("On iPhone or iPad, open the Share menu and choose Add to Home Screen. On Android, use the browser menu and choose Install app.");
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  document.getElementById("installButton")?.classList.add("hidden");
}

function frequencyLabel(value) {
  return {
    daily: "Daily",
    weekly: "Weekly",
    fortnightly: "Every two weeks",
    monthly: "Monthly"
  }[value] || value;
}

function nextCleaningDate(currentDate, frequency) {
  const base = currentDate ? dateOnly(currentDate) : new Date();
  const next = new Date(base);
  if (frequency === "daily") next.setDate(next.getDate() + 1);
  if (frequency === "weekly") next.setDate(next.getDate() + 7);
  if (frequency === "fortnightly") next.setDate(next.getDate() + 14);
  if (frequency === "monthly") next.setMonth(next.getMonth() + 1);
  return next.toISOString().slice(0, 10);
}

function isDueTodayOrEarlier(value) {
  if (!value) return false;
  const today = new Date();
  today.setHours(12,0,0,0);
  return dateOnly(value) <= today;
}

function openCleaningDialog() {
  openAddDialog("cleaning");
}

function completeCleaning(id) {
  const task = data.cleaningTasks.find(item => item.id === id);
  if (!task) return;
  task.lastCompleted = new Date().toISOString().slice(0, 10);
  task.nextDue = nextCleaningDate(task.nextDue || task.lastCompleted, task.frequency);
  saveData();
  renderAll();
}

function deleteCleaning(id) {
  data.cleaningTasks = data.cleaningTasks.filter(item => item.id !== id);
  saveData();
  renderAll();
}

function editCleaning(id) {
  const item = data.cleaningTasks.find(x => x.id === id);
  if (!item) return;
  clearForm();
  itemType.value = "cleaning";
  document.getElementById("editingId").value = item.id;
  document.getElementById("itemName").value = item.name || "";
  document.getElementById("itemDetails").value = item.details || "";
  document.getElementById("cleaningRoom").value = item.room || "";
  document.getElementById("cleaningFrequency").value = item.frequency || "weekly";
  document.getElementById("cleaningStartDate").value = item.nextDue || "";
  document.getElementById("dialogTitle").textContent = "Edit cleaning task";
  updateFormVisibility();
  dialog.showModal();
}

function renderCleaningToday() {
  const area = document.getElementById("cleaningTodayArea");
  const due = data.cleaningTasks
    .filter(item => isDueTodayOrEarlier(item.nextDue))
    .sort((a,b) => dateOnly(a.nextDue) - dateOnly(b.nextDue));

  area.innerHTML = "";
  if (!due.length) {
    area.innerHTML = `<div class="empty-state">No cleaning jobs are due today.</div>`;
    return;
  }

  due.forEach(item => {
    const card = document.createElement("div");
    card.className = "list-card cleaning-card due-today";
    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="card-title">${escapeHtml(item.name)}</div>
          <div class="card-meta">${escapeHtml(item.room || "General")} - ${frequencyLabel(item.frequency)}</div>
        </div>
        <span class="badge due">Due now</span>
      </div>
      <div class="card-actions">
        <button type="button" onclick="completeCleaning('${item.id}')">Done - set next date</button>
        <button type="button" onclick="editCleaning('${item.id}')">Edit</button>
      </div>`;
    area.appendChild(card);
  });
}

function renderCleaning() {
  const area = document.getElementById("cleaningArea");
  area.innerHTML = "";

  if (!data.cleaningTasks.length) {
    area.innerHTML = `<div class="empty-state">No cleaning tasks yet. Add jobs such as dusting, changing sheets or a monthly deep clean.</div>`;
    return;
  }

  [...data.cleaningTasks]
    .sort((a,b) => dateOnly(a.nextDue) - dateOnly(b.nextDue))
    .forEach(item => {
      const dueNow = isDueTodayOrEarlier(item.nextDue);
      const card = document.createElement("div");
      card.className = `list-card cleaning-card ${dueNow ? "due-today" : ""}`;
      card.innerHTML = `
        <div class="card-top">
          <div>
            <div class="card-title">${escapeHtml(item.name)}</div>
            <div class="card-meta">${escapeHtml(item.room || "General")}</div>
            <div class="cleaning-frequency">${frequencyLabel(item.frequency)} - next due ${formatDate(item.nextDue)}</div>
            <div class="card-details">${escapeHtml(item.details || "")}</div>
          </div>
          <span class="badge ${dueNow ? "due" : "ongoing"}">${dueNow ? "Due now" : "Scheduled"}</span>
        </div>
        <div class="card-actions">
          <button type="button" onclick="completeCleaning('${item.id}')">Complete</button>
          <button type="button" onclick="editCleaning('${item.id}')">Edit</button>
          <button type="button" class="danger-button" onclick="deleteCleaning('${item.id}')">Delete</button>
        </div>`;
      area.appendChild(card);
    });
}

function getWeeklyItems() {
  const today = new Date(); today.setHours(12,0,0,0);
  const end = new Date(today); end.setDate(end.getDate() + 7);

  const ordinary = [
    ...data.todos.map(item => ({ ...item, source: "To-do" })),
    ...data.projects.map(item => ({ ...item, source: "Project" })),
    ...data.projects.flatMap(project => project.steps.map(step => ({ ...step, source: `Project step: ${project.name}` }))),
    ...data.cleaningTasks.map(item => ({
      id: item.id,
      name: item.name,
      details: item.details,
      source: `Cleaning: ${item.room || "General"}`,
      dueDate: item.nextDue,
      leadDays: 0,
      completed: false,
      timingType: "date"
    }))
  ].filter(item => !item.completed && item.dueDate)
   .filter(item => {
      const due = dateOnly(item.dueDate);
      const lead = Number(item.leadDays || 7);
      const scheduleDate = new Date(due); scheduleDate.setDate(scheduleDate.getDate() - lead);
      return scheduleDate <= end;
   });

  const annual = data.annualDates.map(item => {
    const occurrence = nextAnnualOccurrence(item.monthDay);
    return {
      ...item,
      name: item.name,
      source: item.kind || "Annual reminder",
      dueDate: occurrence ? occurrence.toISOString().slice(0,10) : null,
      annual: true
    };
  }).filter(item => {
    if (!item.dueDate) return false;
    const occurrence = dateOnly(item.dueDate);
    const reminder = Number(item.reminderDays || 7);
    const reminderDate = new Date(occurrence); reminderDate.setDate(reminderDate.getDate() - reminder);
    return reminderDate <= end;
  });

  return [...ordinary, ...annual].sort((a,b) => dateOnly(a.dueDate) - dateOnly(b.dueDate));
}


function annualStatus(item) {
  const occurrence = nextAnnualOccurrence(item.monthDay);
  if (!occurrence) return null;

  const today = new Date();
  today.setHours(12,0,0,0);
  const days = daysBetween(today, occurrence);
  const reminderDays = Number(item.reminderDays || 7);

  return {
    occurrence,
    days,
    reminderDays,
    isToday: days === 0,
    inReminderWindow: days >= 0 && days <= reminderDays
  };
}

function getTodayReminderItems() {
  const today = new Date();
  today.setHours(12,0,0,0);

  const dated = [
    ...data.todos.map(item => ({ ...item, source: "To-do", itemType: "todo" })),
    ...data.projects.map(item => ({ ...item, source: "Project", itemType: "project" })),
    ...data.projects.flatMap(project =>
      project.steps.map(step => ({
        ...step,
        source: `Project step: ${project.name}`,
        itemType: "step",
        parentId: project.id
      }))
    )
  ].filter(item => !item.completed && item.dueDate)
   .filter(item => dateOnly(item.dueDate) <= today);

  const annual = data.annualDates
    .map(item => ({ item, status: annualStatus(item) }))
    .filter(entry => entry.status && (entry.status.isToday || entry.status.inReminderWindow))
    .map(entry => ({
      id: entry.item.id,
      name: entry.item.name,
      details: entry.item.details,
      source: entry.status.isToday ? "Annual date today" : "Annual reminder",
      dueDate: entry.status.occurrence.toISOString().slice(0,10),
      itemType: "annual"
    }));

  const cleaning = data.cleaningTasks
    .filter(item => isDueTodayOrEarlier(item.nextDue))
    .map(item => ({
      id: item.id,
      name: item.name,
      details: item.details,
      source: `Cleaning: ${item.room || "General"}`,
      dueDate: item.nextDue,
      itemType: "cleaning"
    }));

  return [...dated, ...annual, ...cleaning]
    .sort((a,b) => dateOnly(a.dueDate) - dateOnly(b.dueDate));
}

function renderTodayReminders() {
  const area = document.getElementById("todayRemindersArea");
  const items = getTodayReminderItems();
  area.innerHTML = "";

  if (!items.length) {
    area.innerHTML = `<div class="empty-state">No dated reminders need attention today.</div>`;
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "list-card today-highlight";

    let actions = "";
    if (item.itemType === "annual") {
      actions = `<button type="button" onclick="editAnnual('${item.id}')">Edit</button>`;
    } else if (item.itemType === "cleaning") {
      actions = `<button type="button" onclick="completeCleaning('${item.id}')">Complete</button>
                 <button type="button" onclick="editCleaning('${item.id}')">Edit</button>`;
    } else if (item.itemType === "todo") {
      actions = `<button type="button" onclick="editTodo('${item.id}')">Edit</button>`;
    } else if (item.itemType === "project") {
      actions = `<button type="button" onclick="editProject('${item.id}')">Edit</button>`;
    } else if (item.itemType === "step") {
      actions = `<button type="button" onclick="editStep('${item.parentId}','${item.id}')">Edit step</button>`;
    }

    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="card-title">${escapeHtml(item.name)}</div>
          <div class="card-meta">${escapeHtml(item.source)} - ${formatDate(item.dueDate, item.itemType !== "annual")}</div>
          <div class="card-details">${escapeHtml(item.details || "")}</div>
        </div>
        <span class="badge due">Today</span>
      </div>
      <div class="card-actions">${actions}</div>
    `;
    area.appendChild(card);
  });
}

function renderMainOverview() {
  const area = document.getElementById("mainOverviewArea");
  area.innerHTML = `
    <div class="overview-card"><strong>To-do items</strong><span class="overview-number">${data.todos.length}</span></div>
    <div class="overview-card"><strong>Projects</strong><span class="overview-number">${data.projects.length}</span></div>
    <div class="overview-card"><strong>Annual dates</strong><span class="overview-number">${data.annualDates.length}</span></div>
    <div class="overview-card"><strong>Cleaning tasks</strong><span class="overview-number">${data.cleaningTasks.length}</span></div>
  `;
}

function renderWeekly() {
  const area = document.getElementById("weeklyArea");
  const items = getWeeklyItems();
  area.innerHTML = "";
  if (!items.length) {
    area.innerHTML = `<div class="empty-state">Nothing time-sensitive needs attention this week.</div>`;
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "list-card";
    const label = item.annual ? `${item.source} - ${formatDate(item.dueDate, false)}` : `${item.source} - ${getTimingText(item)}`;
    card.innerHTML = `<div class="card-top"><div><div class="card-title">${escapeHtml(item.name)}</div><div class="card-meta">${escapeHtml(label)}</div></div><span class="badge due">This week</span></div>`;
    area.appendChild(card);
  });
}

function renderTodos() {
  const area = document.getElementById("todoArea");
  area.innerHTML = "";
  if (!data.todos.length) {
    area.innerHTML = `<div class="empty-state">No to-do items yet. Use Add to-do.</div>`;
    return;
  }

  data.todos.sort(sortByDueDate).forEach(todo => {
    const card = document.createElement("div");
    card.className = `list-card ${todo.completed ? "completed-card" : ""}`;
    const badge = getBadge(todo);
    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="card-title">${escapeHtml(todo.name)}</div>
          <div class="card-details">${escapeHtml(todo.details || "")}</div>
        </div>
        <span class="badge ${badge.cls}">${badge.text}</span>
      </div>
      <div class="card-actions">
        <button type="button" onclick="editTodo('${todo.id}')">Edit</button>
        <button type="button" onclick="toggleTodo('${todo.id}')">${todo.completed ? "Mark active" : "Complete"}</button>
        <button type="button" class="danger-button" onclick="deleteTodo('${todo.id}')">Delete</button>
      </div>`;
    area.appendChild(card);
  });
}

function renderAnnualDates() {
  const area = document.getElementById("annualArea");
  area.innerHTML = "";
  if (!data.annualDates.length) {
    area.innerHTML = `<div class="empty-state">No birthdays or annual dates yet.</div>`;
    return;
  }

  [...data.annualDates].sort((a,b) => nextAnnualOccurrence(a.monthDay) - nextAnnualOccurrence(b.monthDay)).forEach(item => {
    const next = nextAnnualOccurrence(item.monthDay);
    const card = document.createElement("div");
    card.className = "list-card";
    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="card-title">${escapeHtml(item.name)}</div>
          <div class="card-meta">${escapeHtml(item.kind || "Annual reminder")} - ${next ? next.toLocaleDateString("en-GB",{day:"numeric",month:"long"}) : ""}</div>
          <div class="card-details">${escapeHtml(item.details || "")}</div>
        </div>
        <span class="badge ongoing">Annual</span>
      </div>
      <div class="card-actions">
        <button type="button" onclick="editAnnual('${item.id}')">Edit</button>
        <button type="button" class="danger-button" onclick="deleteAnnual('${item.id}')">Delete</button>
      </div>`;
    area.appendChild(card);
  });
}

function renderProjects() {
  const area = document.getElementById("projectsArea");
  area.innerHTML = "";
  if (!data.projects.length) {
    area.innerHTML = `<div class="empty-state">No projects yet. Use Add project.</div>`;
    return;
  }

  data.projects.sort(sortByDueDate).forEach(project => {
    const card = document.createElement("div");
    card.className = `list-card ${project.completed ? "completed-card" : ""}`;
    const badge = getBadge(project);
    const stepsHtml = project.steps.length
      ? project.steps.map(step => `
        <div class="list-card">
          <label class="step-row">
            <input type="checkbox" ${step.completed ? "checked" : ""} onchange="toggleStep('${project.id}','${step.id}')">
            <span>
              <strong>${escapeHtml(step.name)}</strong><br>
              <span class="card-meta">${escapeHtml(step.details || "")}${step.dueDate ? ` - Due ${formatDate(step.dueDate)}` : ""}</span>
            </span>
          </label>
          <div class="card-actions">
            <button type="button" onclick="editStep('${project.id}','${step.id}')">Edit step</button>
            <button type="button" class="danger-button" onclick="deleteStep('${project.id}','${step.id}')">Delete step</button>
          </div>
        </div>`).join("")
      : `<div class="card-meta">No steps added yet.</div>`;

    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="card-title">${escapeHtml(project.name)}</div>
          <div class="card-details">${escapeHtml(project.details || "")}</div>
        </div>
        <span class="badge ${badge.cls}">${badge.text}</span>
      </div>
      <div class="steps-list">${stepsHtml}</div>
      <div class="card-actions">
        <button type="button" onclick="editProject('${project.id}')">Edit project</button>
        <button type="button" onclick="openAddDialog('step','${project.id}')">Add step</button>
        <button type="button" onclick="toggleProject('${project.id}')">${project.completed ? "Mark active" : "Complete project"}</button>
        <button type="button" class="danger-button" onclick="deleteProject('${project.id}')">Delete</button>
      </div>`;
    area.appendChild(card);
  });
}

function sortByDueDate(a,b) {
  if (a.completed !== b.completed) return a.completed ? 1 : -1;
  if (!a.dueDate && !b.dueDate) return 0;
  if (!a.dueDate) return 1;
  if (!b.dueDate) return -1;
  return dateOnly(a.dueDate) - dateOnly(b.dueDate);
}

function toggleTodo(id) { const item=data.todos.find(x=>x.id===id); if(item)item.completed=!item.completed; saveData(); renderAll(); }
function deleteTodo(id) { data.todos=data.todos.filter(x=>x.id!==id); saveData(); renderAll(); }
function toggleProject(id) { const item=data.projects.find(x=>x.id===id); if(item)item.completed=!item.completed; saveData(); renderAll(); }
function deleteProject(id) { data.projects=data.projects.filter(x=>x.id!==id); saveData(); renderAll(); }
function deleteAnnual(id) { data.annualDates=data.annualDates.filter(x=>x.id!==id); saveData(); renderAll(); }

function toggleStep(projectId,stepId) {
  const project=data.projects.find(x=>x.id===projectId);
  const step=project?.steps.find(x=>x.id===stepId);
  if(step) step.completed=!step.completed;
  saveData(); renderAll();
}

function deleteStep(projectId,stepId) {
  const project=data.projects.find(x=>x.id===projectId);
  if(project) project.steps=project.steps.filter(x=>x.id!==stepId);
  saveData(); renderAll();
}

const dialog=document.getElementById("addDialog");
const addForm=document.getElementById("addForm");
const itemType=document.getElementById("itemType");
const timingType=document.getElementById("timingType");

function clearForm() {
  addForm.reset();
  document.getElementById("editingId").value="";
  document.getElementById("editingParentId").value="";
  document.getElementById("monthsCount").value=3;
  document.getElementById("leadDays").value=7;
  document.getElementById("annualReminderDays").value=7;
  document.getElementById("cleaningFrequency").value="weekly";
  document.getElementById("cleaningStartDate").value=new Date().toISOString().slice(0,10);
}

function openAddDialog(type="todo",projectId="") {
  clearForm();
  itemType.value=type;
  document.getElementById("editingParentId").value=projectId;
  populateProjectPicker();
  if(projectId) document.getElementById("projectPicker").value=projectId;
  document.getElementById("dialogTitle").textContent="New item";
  updateFormVisibility();
  dialog.showModal();
  document.getElementById("itemName").focus();
}

function openAnnualDialog() { openAddDialog("annual"); }
function closeAddDialog() { dialog.close(); }

function populateProjectPicker() {
  document.getElementById("projectPicker").innerHTML=data.projects
    .filter(p=>!p.completed)
    .map(p=>`<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("");
}

function updateFormVisibility() {
  const type=itemType.value;
  const timing=timingType.value;
  const routine = type === "daily" || type === "evening";
  document.getElementById("projectPickerLabel").classList.toggle("hidden",type!=="step");
  document.getElementById("cleaningAreaLabel").classList.toggle("hidden",type!=="cleaning");
  document.getElementById("cleaningFrequencyLabel").classList.toggle("hidden",type!=="cleaning");
  document.getElementById("cleaningStartLabel").classList.toggle("hidden",type!=="cleaning");
  document.getElementById("annualDateLabel").classList.toggle("hidden",type!=="annual");
  document.getElementById("annualReminderLabel").classList.toggle("hidden",type!=="annual");
  document.getElementById("dateLabel").classList.toggle("hidden",timing!=="date" || type==="annual" || routine);
  document.getElementById("monthsLabel").classList.toggle("hidden",timing!=="months" || type==="annual" || routine);
  document.getElementById("leadLabel").classList.toggle("hidden",!(["date","months"].includes(timing)) || type==="annual" || routine);
  timingType.closest("label").classList.toggle("hidden",type==="annual" || type==="cleaning" || routine);
  document.getElementById("detailsLabel").querySelector("textarea").placeholder =
    routine ? "For example: 10 minutes, after breakfast, or any helpful note" : "Notes, contact details, what needs doing...";
}

itemType.addEventListener("change",updateFormVisibility);
timingType.addEventListener("change",updateFormVisibility);

function loadCommon(item,type,parentId="") {
  clearForm();
  itemType.value=type;
  document.getElementById("editingId").value=item.id;
  document.getElementById("editingParentId").value=parentId;
  document.getElementById("itemName").value=item.name || "";
  document.getElementById("itemDetails").value=item.details || "";
  timingType.value=item.timingType || (item.dueDate ? "date" : "none");
  document.getElementById("dueDate").value=item.dueDate || "";
  document.getElementById("leadDays").value=item.leadDays ?? 7;
  populateProjectPicker();
  if(parentId) document.getElementById("projectPicker").value=parentId;
  document.getElementById("dialogTitle").textContent="Edit item";
  updateFormVisibility();
  dialog.showModal();
}

function editTodo(id) { const item=data.todos.find(x=>x.id===id); if(item)loadCommon(item,"todo"); }
function editProject(id) { const item=data.projects.find(x=>x.id===id); if(item)loadCommon(item,"project"); }
function editStep(projectId,stepId) {
  const project=data.projects.find(x=>x.id===projectId);
  const item=project?.steps.find(x=>x.id===stepId);
  if(item)loadCommon(item,"step",projectId);
}
function editAnnual(id) {
  const item=data.annualDates.find(x=>x.id===id);
  if(!item)return;
  clearForm();
  itemType.value="annual";
  document.getElementById("editingId").value=item.id;
  document.getElementById("itemName").value=item.name || "";
  document.getElementById("itemDetails").value=item.details || "";
  document.getElementById("annualDate").value=`2000-${item.monthDay}`;
  document.getElementById("annualReminderDays").value=item.reminderDays ?? 7;
  document.getElementById("dialogTitle").textContent="Edit annual date";
  updateFormVisibility();
  dialog.showModal();
}

addForm.addEventListener("submit",event=>{
  event.preventDefault();
  const type=itemType.value;
  const id=document.getElementById("editingId").value;
  const parentId=document.getElementById("editingParentId").value || document.getElementById("projectPicker").value;
  const name=document.getElementById("itemName").value.trim();
  const details=document.getElementById("itemDetails").value.trim();
  const timing=timingType.value;
  const leadDays=Number(document.getElementById("leadDays").value || 7);
  if(!name)return;

  if(type==="daily" || type==="evening") {
    const list = type === "evening" ? data.eveningTasks : data.dailyTasks;
    const payload = { id: id || uid(), title: name, time: details };
    if (id) list[list.findIndex(x => x.id === id)] = payload;
    else list.push(payload);
    saveData(); closeAddDialog(); renderAll(); return;
  }

  if(type==="cleaning") {
    const startDate = document.getElementById("cleaningStartDate").value || new Date().toISOString().slice(0,10);
    const payload = {
      id: id || uid(),
      name,
      details,
      room: document.getElementById("cleaningRoom").value.trim(),
      frequency: document.getElementById("cleaningFrequency").value,
      nextDue: startDate,
      lastCompleted: null
    };
    if(id) {
      const old = data.cleaningTasks.find(x => x.id === id);
      payload.lastCompleted = old?.lastCompleted || null;
      data.cleaningTasks[data.cleaningTasks.findIndex(x => x.id === id)] = payload;
    } else {
      data.cleaningTasks.push(payload);
    }
    saveData(); closeAddDialog(); renderAll(); return;
  }

  if(type==="annual") {
    const annualDate=document.getElementById("annualDate").value;
    if(!annualDate)return;
    const monthDay=annualDate.slice(5);
    const payload={id:id||uid(),name,details,monthDay,reminderDays:Number(document.getElementById("annualReminderDays").value||7),kind:"Birthday / annual date"};
    if(id) data.annualDates[data.annualDates.findIndex(x=>x.id===id)]=payload;
    else data.annualDates.push(payload);
    saveData(); closeAddDialog(); renderAll(); return;
  }

  let dueDate=null;
  if(timing==="date") dueDate=document.getElementById("dueDate").value || null;
  if(timing==="months") {
    const date=new Date();
    date.setMonth(date.getMonth()+Number(document.getElementById("monthsCount").value||1));
    dueDate=date.toISOString().slice(0,10);
  }

  const common={id:id||uid(),name,details,timingType:timing,dueDate,leadDays,completed:false};

  if(type==="todo") {
    if(id) {
      const old=data.todos.find(x=>x.id===id);
      common.completed=old?.completed||false;
      data.todos[data.todos.findIndex(x=>x.id===id)]=common;
    } else data.todos.push(common);
  }

  if(type==="project") {
    if(id) {
      const old=data.projects.find(x=>x.id===id);
      data.projects[data.projects.findIndex(x=>x.id===id)]={...common,completed:old?.completed||false,steps:old?.steps||[]};
    } else data.projects.push({...common,steps:[]});
  }

  if(type==="step") {
    const project=data.projects.find(x=>x.id===parentId);
    if(project) {
      if(id) {
        const old=project.steps.find(x=>x.id===id);
        project.steps[project.steps.findIndex(x=>x.id===id)]={...common,completed:old?.completed||false};
      } else project.steps.push(common);
    }
  }

  if(type==="category") {
    const category=document.getElementById("categoryPicker").value;
    data.categoryTasks[category].push(name);
  }

  saveData(); closeAddDialog(); renderAll();
});

function escapeHtml(value) {
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

function renderAll() {
  applySettings();
  updateDailyBackup(JSON.stringify(normaliseData(data)));
  renderDailyBackups();
  setDate();
  renderChecklist("dailyChecklist",data.dailyTasks,"daily",false);
  renderChecklist("eveningChecklist",data.eveningTasks,"daily",false);
  renderTodayReminders();
  renderWeekly();
  renderCleaningToday();
  renderTodos();
  renderAnnualDates();
  renderProjects();
  renderCleaning();
  renderMainOverview();
  updateProgress();
  updateStorageStatus();
  restorePanelStates();
}


let waitingServiceWorker = null;

function applyAppUpdate() {
  if (waitingServiceWorker) waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
  else window.location.reload();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./service-worker.js");
      if (registration.waiting) {
        waitingServiceWorker = registration.waiting;
        document.getElementById("updateButton")?.classList.remove("hidden");
        document.getElementById("settingsUpdateButton")?.classList.remove("hidden");
      }
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        worker?.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            waitingServiceWorker = worker;
            document.getElementById("updateButton")?.classList.remove("hidden");
        document.getElementById("settingsUpdateButton")?.classList.remove("hidden");
          }
        });
      });
    } catch (error) {
      console.warn("Offline app registration failed", error);
    }
  });
  navigator.serviceWorker.addEventListener("controllerchange", () => window.location.reload());
}

renderAll();
