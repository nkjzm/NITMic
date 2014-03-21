var data = {
    cards: [
        {
            id: '1',
            name: 'レアカード',
            level: 10,
            maxLevel: 20,
            hasSkill: true,
            skill: 'それなりのスキルだよ',
            rarity: 'rare'
        },
        {
            id: '2',
            name: 'ノーマルカード',
            level: 10,
            maxLevel: 10,
            hasSkill: false,
            skill: '',
            rarity: 'normal'
        },
        {
            id: '3',
            name: 'ノーマルカード2',
            level: 10,
            maxLevel: 10,
            hasSkill: false,
            skill: '',
            rarity: 'normal'
        }
    ],
    maxCardCount: 100,
    totalCardCount: 2,
    userId: '12345'
};



// テンプレートの登録
jsviews.templates({
    cardList: document.getElementById('templateCardList').innerHTML
});

jsviews.views.helpers({
    dump: function(value) { return JSON.stringify(value);}
});

console.log(jsviews.render.cardList(data));
// 描画
document.getElementById('result').innerHTML = jsviews.render.cardList(data);
