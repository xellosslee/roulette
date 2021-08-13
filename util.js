var util = {
    setStorage: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    /** 로컬 스토리지 값 가져오기 (JSON형태, text형태 지원) */
    getStorage: function (key) {
        var rs = localStorage.getItem(key) || '{}'
        return JSON.parse(rs)
    },
}