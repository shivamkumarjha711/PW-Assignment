{
    console.log(var1);       // undefined
    console.log(var2);       // ReferenceError: Cannot access 'var2' before initialization
    console.log(var3);          // ReferenceError: Cannot access 'var3' before initialization

    var var1 = 20;
    let var2 = 10;
    const var3 = 40;

    console.log(var1);      // 20
    console.log(var2);      // 10
    console.log(var3);      // 40
}

