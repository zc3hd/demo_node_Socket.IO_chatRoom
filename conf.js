module.exports = {
  // 数据库--名称（线上、线下）
  db:"chatRoom",

  // 测试模式下的端口
  dev_port:1010,

  // 打包后/测试时被代理的端口
  api_port:1011,

  // 测试API
  test_api:"/api/test.do",

  
  // ===========================服务器的参数
  // IP登录端口
  login_port: 22,
  // 登录用户名
  user: "cc",
  // 公网IP
  ip: "0.0.0.0",
  // 线上的数据库上传的文件夹
  db_to_olDir: 'db_task/db_from_out'
}