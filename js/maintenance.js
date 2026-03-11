/* Maintenance Mode Checker */

const maintenanceMode = localStorage.getItem("maintenanceMode");

/* Current page path */

const currentPath = window.location.pathname;

/* Check if user is inside admin panel */

const isAdminPage = currentPath.includes("/admin");

/* Check if current page is maintenance page */

const isMaintenancePage = currentPath.includes("maintenance.html");


if(maintenanceMode === "true"){

/* If maintenance ON and not admin and not maintenance page */

if(!isAdminPage && !isMaintenancePage){

window.location.href = "maintenance.html";

}

}