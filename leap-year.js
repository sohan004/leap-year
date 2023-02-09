document.getElementById('sub').addEventListener('click', function(){
    const box1 = document.getElementById('box-1');
    const year = parseInt(box1.value);
    function lpYear (leap){
        if(leap > 0){
            if(leap % 4 === 0){
                return 'This year is leap year'
            }
            else{
                return 'This year is not leap year'
            }
        }
        else{
            return 'please input year'
        }
    }
    const yearRslt = lpYear(year);
    const result = document.getElementById('result');
    result.innerText = yearRslt;
    box1.value = '';
})