# Covid19-trend-CN

> Covid19-trend-CN 是一个极其简陋的疫情信息展示网站，基于 Flask \ Echarts \ Jquery \ MySQL \ Gunicorn ...

运行：

- 首先运行 `create.sql` 脚本创建数据库(因为没有使用 `click`)

- 确保数据库以及表创建成功后，运行 `spider.py`

- 运行 `gunicorn` 

  ```bash
  gunicorn -b 0.0.0.0:xxxx -D app:xxx
  ```


