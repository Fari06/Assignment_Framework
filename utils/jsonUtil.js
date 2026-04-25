import fs from 'fs';

export function readJSON(filePath) {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}