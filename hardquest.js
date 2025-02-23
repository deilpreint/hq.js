import CRC32 from 'crc-32';


const make = () => [];
const set = (map, key, value) => {
    const hash = CRC32.str(key);
    const index = hash >>> 0;
    
    if (map[index] && map[index][0] !== key) {
        return false;
    }
    
    map[index] = [key, value];
    return true;
};

const get = (map, key, defaultValue = null) => {
    const hash = CRC32.str(key);
    const index = hash >>> 0;
    
    if (map[index] && map[index][0] === key) {
        return map[index][1];
    }
    return defaultValue;
};

const map = make();
let result = get(map, "key");
console.log(result);

set(map, "name", "Alice");

console.log(get(map, "name")); // "Alice"
console.log(get(map, "age", 25)); // 25