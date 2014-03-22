var data = {
    name: '爆転ずし',
    id: 'bakutenzushi',
    release: 2013,
    genre: 'アクション',
    player: '2~4人(対戦)',
    time: '3~5',
    headline: 'ド迫力の寿司バトル！！',
    description: '寿司を操作して相手を場外に飛ばすんだ！ 10点とったら勝利だ！ ○ボタンを押すとスピンができる！ 相手を遠くに飛ばせるぞ！ アイテムをとると何かが起こる…?! 効果は自分の目で確かめろ！ ステージから飛び出してもあきらめるな！ ふんばりで上手くいけば復帰出来るぞ！<br/>新感覚のアクションゲーム！ ライバルたちをはじき飛ばせ！！'
};

// テンプレートが定義されたscript要素を探し、そこからテンプレートオブジェクトを作成
var template = $.templates("#templateGamePage");

// テンプレートとデータモデルを組み合わせてテキストを生成
var result = template.render(data);

// 描画
document.getElementById('result').innerHTML = result;
