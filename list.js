/**
 * 数据结构-列表
 * @author 王
 */

function list() {
    this.listSize = 0; //列表中的元素个数
    this.pos = 0; //列表的当前位置 默认第一位
    this.dataStore = []; //存储列表数据
    this.find = find; //返回元素在列表中的位置
    this.length = length; //返回列表中元素的个数
    this.clear = clear; //清空列表中的所有元素
    this.toString = toString; //返回列表的字符串形式
    this.getElement = getElement; //返回当前位置的元素
    this.insert = insert; //在现有元素后插入新元素
    this.append = append; //在列表末尾添加新元素
    this.remove = remove; //从列表中删除元素
    this.front = front; //将列表的当前位置移动到第一个元素
    this.end = end; //将列表的当前位置移动到最后一个元素
    this.prev = prev; //将当前位置后移一位
    this.next = next; //将当前位置前移一位
    this.hasNext = hasNext; //判断是否是最后一位
    this.hasPrev = hasPrev; //判断是否是第一位
    this.currPos = currPos; //返回列表当前位置
    this.moveTo = moveTo; //将当前位置移动到指定位置

    function find(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;

    }

    function length() {
        return this.listSize;
    }

    function clear() {
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;

    }

    function toString() {
        return this.dataStore.toString();
    }

    function getElement() {
        return this.dataStore[this.pos];
    }

    function insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos, 0, element);
        }
    }

    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    function remove(element) {
        var removePos = this.find(element);
        if (removePos > -1) {
            this.dataStore.splice(removePos, 1);
            this.listSize--;
            return true;
        }
        return false;
    }

    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize - 1;
    }

    function prev() {
        if (this.pos > 0) {
            this.pos--;
        }
    }

    function next() {
        if (this.pos < this.listSize) {
            this.pos++;
        }
    }

    function hasNext() {
        return this.pos == this.listSize;
    }

    function hasPrev() {
        return this.pos == 0;
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        if (0 <= position && position <= this.listSize) {
            this.pos = position
        }
    }
}
