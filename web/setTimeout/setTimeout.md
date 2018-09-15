setTimeout属于宏任务，他会使回调函数最少等待多少秒才执行。所以时间会不那么准确。

使用微任务来计时，可以使得定时器更准确地延时执行任务。

```javascript
function setTimeoutQuick(callback, ns) {
        let start = (new Date).getTime();        
        pr();
        function pr(p = Promise.resolve()) {
            p.then(v => {
                let now = (new Date).getTime();
                if (now - start >= ns) {
                    callback();
                } else {
                    return pr(p);
                }
            })
        }
    }
```

以上的延时函数有以上特点：

1. 像setTimeout不会阻塞之后的代码，但是会阻塞HTML的解析渲染和事件监听或者其他宏任务，setTimeout不会阻塞宏任务。
2. setTimeoutQuick时间计算更精确