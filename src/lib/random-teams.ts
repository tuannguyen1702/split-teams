import { localStorageGetItem, localStorageSetItem } from "./localStorage/helpers";

export async function randomTeams(data: any, dataName = 'data', timeKey = 'time') {
  const title = document.getElementById(`title`);
  const teams: any = document.getElementsByClassName(`teams`);
  const time = localStorageGetItem(timeKey)
    ? parseInt(localStorageGetItem(timeKey) ?? "0")
    : 0;
  if (title && time > 0) title.innerHTML = `Kết Quả Lần ${time + 1}`;
  if (teams && time > 0) {
    for (const element of teams) {
      element.innerHTML = "Đội";
    }
  }

  const newData = [];
  for (let i = 0; i < data.length; i++) {
    const rowSetInterval = setInterval(() => {
      const randomArr1 = generateUniqueRandomNumbers(0, 3);
      for (let j = 0; j < randomArr1.length; j++) {
        const el = document.getElementById(`group-${j + 1}-name-${i + 1}`);
        if (el) el.innerHTML = data[i][randomArr1[j]];
      }
    }, 20);

    const newItem = await someAsyncFunction(data, i);

    newData[i] = newItem;

    clearInterval(rowSetInterval);
  }

  localStorageSetItem(timeKey, `${time + 1}`);
  localStorageSetItem(dataName, JSON.stringify({ data: newData }));
}

async function someAsyncFunction(data: any, i: number) {
  return new Promise((resolve) => {
    const randomArr = generateUniqueRandomNumbers(0, 3);

    setTimeout(() => {
      const newRow = [];
      for (let j = 0; j < randomArr.length; j++) {
        const el = document.getElementById(`group-${j + 1}-name-${i + 1}`);
        if (el) el.innerHTML = data[i][randomArr[j]];
        newRow.push(data[i][randomArr[j]]);
      }
      resolve(newRow);
    }, 500);
  });
}

function generateUniqueRandomNumbers(min: number, max: number) {
  const uniqueNumbers: number[] = [];

  while (uniqueNumbers.length < max - min + 1) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }

  return uniqueNumbers;
}
