// 연관배열 vs 맵
// 기본문법에서 제공하는 연관배열 - 간단한 맵형태에서는 사용
const user = {
    id: "admin",
    pw: "1234",
    gender: "male"
};
console.log(user["id"]); // admin
// 실무에서는 연관배열보다는 기본API에서 제공하는 맵타입을 사용
const member = new Map();
member.set("id", "guest");
member.set("pw", "0000");
member.set("gender", "female");
console.log(member); // Map(3) { 'id' => 'guest', 'pw' => '0000', 'gender' => 'female' }
console.log(member.get("id")); // guest
export {};
//# sourceMappingURL=map.js.map