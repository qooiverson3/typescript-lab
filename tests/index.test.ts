const sum = (a:number,b:number) :number => {
    return a + b;
}


test('Check the result of 5+2', ()=>{
    expect(sum(5,2)).toBe(7);
})