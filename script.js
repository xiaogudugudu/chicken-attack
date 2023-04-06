const tamagotchiImage = document.getElementById("tamagotchi-image");

function changeImage(imageName) {
    tamagotchiImage.src = imageName;
}

function feed() {
    changeImage("tamagotchi_eating.png");
    setTimeout(() => {
        changeImage("tamagotchi.png");
    }, 3000);
}

function play() {
    changeImage("tamagotchi_playing.png");
    setTimeout(() => {
        changeImage("tamagotchi.png");
    }, 3000);
}

function sleep() {
    isSleeping = true;
    changeImage(tamagotchiStates.sleeping);
    setTimeout(() => {
        changeImage(tamagotchiStates.normal);
        isSleeping = false;
    }, 3000);
}

const tamagotchiStates = {
    normal: "tamagotchi.png",
    eating: "tamagotchi_eating.png",
    playing: "tamagotchi_playing.png",
    sleeping: "tamagotchi_sleeping.png",
    unhappy: "tamagotchi_unhappy.png", // 新增不高興狀態
};

function decreaseStats() {
    tamagotchi.hunger -= 5;
    tamagotchi.happiness -= 5;

    // 在這裡添加邏輯以處理極端值，例如當飢餓值過低時，電子雞可能會變得不高興或生病
    if (tamagotchi.hunger < 30 || tamagotchi.happiness < 30) {
        // 變更電子雞圖片為不高興或生病的圖片
        changeImage(tamagotchiStates.unhappy); // 假設你已經在tamagotchiStates物件中添加了'unhappy'狀態
    } else {
        changeImage(tamagotchiStates.normal);
    }
}

let isSleeping = false;

function decreaseStats() {
    tamagotchi.hunger -= 5;
    tamagotchi.happiness -= 5;
    // 在這裡添加其他需要減少的屬性，例如 tamagotchi.cleanliness -= 5;
}

function startTamagotchiLifeCycle() {
    setInterval(() => {
        if (!isSleeping) {
            decreaseStats();
        }
    }, 1000 * 60); // 這裡設置計時器每60秒更新一次電子雞狀態
}

const tamagotchi = {
    hunger: 100,
    happiness: 100,
    cleanliness: 100,
};

function decreaseStats() {
    tamagotchi.hunger -= 5;
    tamagotchi.happiness -= 5;
    tamagotchi.cleanliness -= 5;

    if (tamagotchi.hunger < 30 || tamagotchi.happiness < 30 || tamagotchi.cleanliness < 30) {
        changeImage(tamagotchiStates.unhappy);
    } else {
        changeImage(tamagotchiStates.normal);
    }
}

function startTamagotchiLifeCycle() {
    setInterval(() => {
        if (!isSleeping) {
            decreaseStats();
        }
    }, 1000 * 60);
}

function feed() {
    if (!isSleeping) {
        tamagotchi.hunger += 20;
        changeImage(tamagotchiStates.eating);
        setTimeout(() => {
            changeImage(tamagotchiStates.normal);
        }, 3000);
    }
}

function play() {
    if (!isSleeping) {
        tamagotchi.happiness += 20;
        changeImage(tamagotchiStates.playing);
        setTimeout(() => {
            changeImage(tamagotchiStates.normal);
        }, 3000);
    }
}

function clean() {
    if (!isSleeping) {
        tamagotchi.cleanliness += 20;
    }
}

startTamagotchiLifeCycle();

const hungerElement = document.getElementById("hunger");
const happinessElement = document.getElementById("happiness");

function updateStatsDisplay() {
    hungerElement.textContent = tamagotchi.hunger;
    happinessElement.textContent = tamagotchi.happiness;
}

function decreaseStats() {
    tamagotchi.hunger -= 5;
    tamagotchi.happiness -= 5;
    updateStatsDisplay();
    // ... 其他代碼
}
