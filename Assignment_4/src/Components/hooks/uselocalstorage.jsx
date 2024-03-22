function useLocalstorage(key, Value) {
    localStorage.setItem(key, JSON.stringify(Value));
    return [Value];
}

export default useLocalstorage;
