// USE ASYNC / AWAIT TO LOAD THE JSON DATA
async function init() {
  try {
    const response = await fetch("./data/employees.json");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
export { init };
