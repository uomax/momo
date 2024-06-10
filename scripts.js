// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 简单的登录验证，仅为示例
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('adminPanel').classList.remove('hidden');
    } else {
        alert('登录失败！');
    }
});

document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userId = document.getElementById('newUserId').value;
    const userPassword = document.getElementById('newUserPassword').value;
    // 添加B账号的逻辑
    console.log(`添加了B账号: ID=${userId}, 密码=${userPassword}`);
    // 更新UI
});
