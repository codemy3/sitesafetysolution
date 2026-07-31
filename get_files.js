
const fs = require('fs');
const text = fs.readFileSync('C:/Users/smait/.gemini/antigravity-ide/brain/bce38f21-2357-4661-b9fe-83d54bc70ba9/.system_generated/logs/transcript_full.jsonl', 'utf8');
const matches = text.match(/"TargetFile"\s*:\s*"([^"]+)"/g);
if (matches) {
  console.log(Array.from(new Set(matches)));
} else {
  console.log('no matches');
}

