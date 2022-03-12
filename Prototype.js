const car = {
    weels: 4,
    init() {
        console.log("Колёс: " + this.weels + ", хозяин: " + this.owner);
    },
};
const carWithOwner = Object.create(car, {
    owner: { value: "Дмитрий" },
});

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();
