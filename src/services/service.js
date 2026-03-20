export async function getInspections() {
  const response = await fetch('/inspections.json');
  const data = await response.json();
  return data;
}