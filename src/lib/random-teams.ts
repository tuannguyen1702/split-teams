// function generateTeams(data: any) {
//     const oldVersion = localStorage.getItem('version');
//     if(oldVersion != version) {
//         localStorage.clear();
//     }
//     let newData = localStorage.getItem('data') || '{"data": []}';
//     time = localStorage.getItem('time') || 0;
//     newData = JSON.parse(newData).data;
//     let renderData = data;

//     const title = document.getElementById(`title`);
//     const groups = document.getElementsByClassName(`group`);
//     let groupName = 'Nhóm';

//     if (newData.length && oldVersion == version) {
//         renderData = newData;
//         title.innerHTML =  `Kết Quả Lần ${time}`;
//         groupName = "Đội";

//     } else {
//         title.innerHTML =  `Danh Sách Gốc`;
//         groupName = "Nhóm";
//     }

//     for (const element of groups) {
//         element.innerHTML = groupName;
//     }

//     for (let i = 0; i < renderData.length; i++) {
//         for (let j = 0; j < renderData[i].length; j++) {
//             const el = document.getElementById(`group-${j + 1}-name-${i + 1}`);
//             el.innerHTML = renderData[i][j];
//         }
//     }

//     localStorage.setItem('version', version);
// }

export async function randomTeams(data: any) {
  const title = document.getElementById(`title`);
  const teams = document.getElementsByClassName(`teams`);
  const time = localStorage.getItem("time")
    ? parseInt(localStorage.getItem("time") ?? "0")
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

  localStorage.setItem("time", `${time + 1}`);
  localStorage.setItem("data", JSON.stringify({ data: newData }));
  //btnCreate.disabled = false;
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
