function cheater(function1, seconds) {
    function Lazyman() {
        alert('Кто хочет поработать?');
        setTimeout(() => function1.call(this, arguments), seconds * 2000);
    }
    return Lazyman;
};

function func() {
    alert('Дело было не в бобине, дело было не в реле, дело было в той хорошей женщине, что сидела на руле!!!');
}
let paused = cheater(func, 3);
paused ();
      