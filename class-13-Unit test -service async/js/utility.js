function Foo(name) {
    this.name = name;
    this.getCurrentDate = function() {
        return new Date();
    };
}