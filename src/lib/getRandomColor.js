// 색상 랜덤 선택 함수 내보내기 : 12개 중 랜덤
export default function getRandomColor(){
    const colors = [
        "#00B9FF",
        "#B4C3FF",
        "#70D2B4",
        "#2ABCB4",
        "#FF607F",
        "#DC6089",
        "#FFBE0A",
        "#FF895A",
        "#A48654",
        "#CD3C3C",
        "#853C3C",
        "#282828"
    ]
    return colors[Math.floor(Math.random()*12)];
}