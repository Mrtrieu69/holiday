const icons = {
    "success" : 'fas fa-check-circle',
    "info" : 'fas fa-info-circle',
    "error": "fas fa-exclamation-triangle"
}

const messages = {
    "success" : 'Save successfully!',
    "info" : 'Function not yet available!',
    "error" : "Error!"
}

const colors = {
    "success" : '#1a9901',
    "info" : '#ffc102',
    "error": '#ef2d23'
}

const showToast = (type, value) => {
    const div = document.createElement("div")
    div.className = `toast ${type}`
    div.innerHTML = `
      <i class="${icons[type]} mr-3" style="color: ${colors[type]}"></i>
      <div>
          ${value ? value : messages[type]}
      </div>
      <div class="message ${type}"></div>
    `
    return div
}

export default showToast