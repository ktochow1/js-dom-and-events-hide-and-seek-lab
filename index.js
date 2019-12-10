function getFirstSelector(selector){
  var d = document.querySelector(selector);
  return d;
}

function nestedTarget(){
  var x = document.querySelector('#nested .target');
  return x;
}

function increaseRankBy(n){
  const ranked_list = document.querySelectorAll('.ranked-list');
  for (let i = 0, l = ranked_list.length; i < l; i++) {
    let children = ranked_list[i].children

    for(let j = 0, k = children.length; j < k; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById( 'grand-node' )
  let nextNode = node.children[ 0 ]

  while ( nextNode ) {
    node = nextNode
    nextNode = node.children[ 0 ]
  }

  return node
}
