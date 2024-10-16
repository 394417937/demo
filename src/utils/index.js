/**
 * 计算给定 HEX 颜色的浅色。
 *
 * @param {string} hex - 输入的 HEX 颜色字符串，格式如 #RRGGBB。
 * @returns {string} 返回计算得到的浅色 HEX 颜色字符串。
 */
export function calculateVeryLightColor(hex) {
    // 移除前缀 #
    hex = hex.replace('#', '')

    // 将 HEX 转换为 RGB
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    // 计算更接近透明的浅色（增加亮度）
    const lightR = Math.round(r + (255 - r) * 0.8) // 50% 向白色混合
    const lightG = Math.round(g + (255 - g) * 0.8)
    const lightB = Math.round(b + (255 - b) * 0.5)

    // 确保 RGB 值在 0-255 范围内
    const clamp = (value) => Math.min(255, Math.max(0, value))

    return `#${((1 << 24) + (clamp(lightR) << 16) + (clamp(lightG) << 8) + clamp(lightB)).toString(16).slice(1).toUpperCase()}`
}

/**
 * file 文件转 Blob
 * @param {File} file - 文件对象
 */
export function fileToBlob(file) {
    // 创建 FileReader 对象
    let reader = new FileReader()
    return new Promise((resolve) => {
        // FileReader 添加 load 事件
        reader.addEventListener('load', (e) => {
            let blob
            if (typeof e.target.result === 'object') {
                blob = new Blob([e.target.result])
            } else {
                blob = e.target.result
            }
            console.log(Object.prototype.toString.call(blob))
            resolve(blob)
        })
        // FileReader 以 ArrayBuffer 格式 读取 File 对象中数据
        reader.readAsArrayBuffer(file)
    })
}
