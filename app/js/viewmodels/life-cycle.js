
// Vuewを読み込む
var Vue = require('vue');

var vm = new Vue({
  el: '#life-cycle',
  template: '<h3>life-cycle</3><button @click="destroy">destroy</button><button @:click="detached">detached</detached>',
  init: function () {
    // データの監視とイベント/ウォッチャのセットアップより前の、インスタンスが初期化されるときに同期的に呼ばれます。
    console.log('#life-cycle: init');
  },
  created: function () {
    // インスタンスが作成された後に、同期的に呼ばれます。
    // この段階では、インスタンスは次の設定されたオプションの処理を終了しています:
    // data の監視、computed properties、methods、watch / event コールバック。
    // しかしながら、DOM のコンパイルは開始されておらず、$el プロパティはまだ有効ではありません。
    console.log('#life-cycle: created');
  },
  beforeCompile: function () {
    // コンパイルが開始される寸前に呼ばれます。
    console.log('#life-cycle: beforeCompile');
  },
  compiled: function () {
    // コンパイルが終了した後に呼ばれます。
    // この段階では、すべてのディレクティブはリンクされているため、データの変更は DOM の更新のトリガになります。
    // しかし、$el がドキュメントに挿入されていることは保証されません。
    console.log('#life-cycle: compiled');
  },
  ready: function () {
    // コンパイルが終了した後に呼ばれます。
    // そして、$el がドキュメントの中に初めて挿入されます(すなわち、最初の attached フックの直後)。
    // この挿入は ready フックのトリガになるように (vm.$appendTo() のようなメソッドやディレクティブの更新の結果をもった)
    // Vue 経由で実行されなくてはならないことに注意してください。
    console.log('#life-cycle: ready');
  },
  attached: function () {
    // vm.$el がディレクティブもしくは VM インスタンス
    // もしくは$appendTo() のような VM インスタンスのメソッドによって DOM に追加されたときに呼ばれます。
    // vm.$el の直接の操作はこのフックのトリガになりません。
    console.log('#life-cycle: attached');
  },
  detached: function () {
    // ディレクティブか VM インスタンスのメソッドによって DOM から vm.$el が削除されたときに呼ばれます。
    // ディレクティブの vm.$el の操作はこのフックのトリガになりません。
    console.log('#life-cycle: detached');
  },
  beforeDestroy: function () {
    // Vue インスタンスが破棄される寸前に呼ばれます。
    // この段階では、インスタンスはまだ完全に使用可能ではありません。
    console.log('#life-cycle: beforeDestroy');
  },
  destroyed: function () {
    // Vue インスタンスが破棄された後に呼ばれます。
    // このフックが呼ばれたとき、Vue インスタンスのすべてのバインディングとディレクティブはバインドを解かれ、すべての子 Vue インスタンスも破棄されます。
    // leave トランジションが存在する場合、destroyed フックはトランジションが終了した後に呼ばれます。
    console.log('#life-cycle: destroyed');
  },
  methods: {
    detached: function() {
      // Vue インスタンスの DOM 要素またはフラグメントを DOM から削除します。
      vm.$remove();
    },
    destroy: function () {
      // vm を完全に破棄します。
      // 既存の他の vm との接続を切り、そのすべてのディレクティブとのバインドを解消し、すべてのイベントリスナを開放します。
      // beforeDestroy および destroyed をトリガします。
      vm.$destroy();
    }
  }
});
