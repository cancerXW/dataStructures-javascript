/**
 * 数据结构-栈
 * @author 王
 */

function stack() {
    this.dataStore = []; //存储数据
    this.top = 0; //栈顶位置
    this.push = push; //入栈
    this.pop = pop; //出栈
    this.peek = peek; //获取栈顶元素
    this.clear = clear; //清空栈
    this.length = length; //获取栈的长度

    function push(element) {
        this.dataStore[this.top++] = element;
    }

    function pop() {
        if (this.top > 0) {
            return this.dataStore[--this.top];
        }
        return null;
    }

    function peek() {
        if (this.top > 0) {
            return this.dataStore[this.top - 1];
        }
        return null;
    }

    function clear() {
        this.dataStore = [];
        this.top = 0;
    }

    function length() {
        return this.top;
    }

}