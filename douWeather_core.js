{
    {
        // 注入template
        let template = `<template id="douWeatherCardTemplate"><style id="positionStyle">:host::after{content: '';}</style><style>:host::after{color:var(--dw-font-color-1);top: 10px;left: 10px;opacity: .7;position: absolute;font-size: 10px;}:host{--dw-background-color:#fff;--dw-shadow-color:rgba(36,37,38,.08);--dw-font-color-1:#bababa;--dw-font-color-2:#6a6a6a;--dw-scrollbar-color:rgba(0,0,0,.2);--dw-graph-color:#c0c0c0;--dw-loading-gradient:linear-gradient(to left,#e4e4e4,#f3f3f3,#e4e4e4)}:host([theme="light"]){--dw-background-color:#fff;--dw-shadow-color:rgba(36,37,38,.08);--dw-font-color-1:#bababa;--dw-font-color-2:#6a6a6a;--dw-scrollbar-color:rgba(0,0,0,.2);--dw-graph-color:#c0c0c0;--dw-loading-gradient:linear-gradient(to left,#e4e4e4,#f3f3f3,#e4e4e4)}:host([theme="dark"]){--dw-background-color:#141414;--dw-shadow-color:rgba(36,37,38,.08);--dw-font-color-1:rgb(255,255,255,.55);--dw-font-color-2:rgb(255,255,255,.85);--dw-scrollbar-color:rgba(255,255,255,.2);--dw-graph-color:rgb(255,255,255,.85);--dw-loading-gradient:linear-gradient(to left,#727272,#848484,#727272)}@media(prefers-color-scheme:dark){:host{--dw-background-color:#141414;--dw-shadow-color:rgba(36,37,38,.08);--dw-font-color-1:rgb(255,255,255,.55);--dw-font-color-2:rgb(255,255,255,.85);--dw-scrollbar-color:rgba(255,255,255,.2);--dw-graph-color:rgb(255,255,255,.85);--dw-loading-gradient:linear-gradient(to left,#727272,#848484,#727272)}}:host{position:relative;display:block;height:180px;background-color:var(--dw-background-color);box-shadow:0 6px 15px var(--dw-shadow-color);border-radius:16px;overflow:hidden;margin:10px;box-sizing:border-box;max-width:665px;min-width:180px;transition:height .3s ease-in-out;will-change:height}.main-data{width:100%;height:180px;display:flex;align-items:center;padding:20px 10px;box-sizing:border-box;position:relative}.main-block{flex:0 0 auto;width:160px;height:100%;vertical-align:middle;border-radius:5px;display:flex;flex-direction:column}.main-block .weather-icon{height:60%}.main-block .weather{font-size:27px;font-weight:100;margin:0;text-align:center;color:var(--dw-font-color-2)}.main-block .weather,.main-block .weather-icon,.main-block .temperature,.container .data-block .value,.container .data-block .desc,.container.loading .suggest-block .value,.container.loading .suggest-block .desc{position:relative}.main-block .weather::after,.main-block .weather-icon::after,.main-block .temperature::after,.container .data-block .value::after,.container .data-block .desc::after,.container.loading .suggest-block .value::after,.container.loading .suggest-block .desc::after{opacity:0;position:absolute;top:2px;left:2px;right:2px;bottom:2px;content:'';border-radius:10px;background-image:var(--dw-loading-gradient);background-size:200% 100%;animation:1s ease-in-out 0s infinite alternate skeleton;transition:opacity .2s linear}.main-block.loading .weather::after,.main-block.loading .weather-icon::after,.main-block.loading .temperature::after,.container.loading .data-block .value::after,.container.loading .data-block .desc::after,.container.loading .suggest-block .value::after,.container.loading .suggest-block .desc::after{opacity:1}.main-block .temperature{font-size:20px;font-weight:100;margin:0;text-align:center;color:var(--dw-font-color-2)}.wrapper{flex:1 1 auto;overflow-x:auto;height:100%;position:relative}.container{padding:0 10px;height:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;box-sizing:border-box}.container>div{height:50%;flex:1 1 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;align-content:space-around}.container .data-block .value{width:100px;transition:all .1s ease-in-out;font-size:27px;font-weight:400;margin:0;text-align:center;color:var(--dw-font-color-2)}.container .data-block .value small{font-size:20px}.container .data-block .desc{font-size:15px;font-weight:100;margin:0;color:var(--dw-font-color-1);text-align:center}.container .suggest-block .value{width:100px;color:var(--dw-font-color-2);transition:all .1s ease-in-out;font-size:23px;font-weight:400;margin:0;text-align:center}.container .suggest-block .desc{font-size:15px;font-weight:100;margin:0;color:var(--dw-font-color-1);text-align:center}@keyframes skeleton{0%{background-position:0 0}100%{background-position:-100% 0}}.wind-arrow{font-family:'windArrows'}::-webkit-scrollbar{height:6px}::-webkit-scrollbar-thumb{border-radius:10px;background:var(--dw-scrollbar-color)}::-webkit-scrollbar-track{background:transparent}.detail-container{padding:5px 20px 5px 20px;flex:1 0 auto;width:100%;overflow-x:auto;box-sizing:border-box;flex-direction:column;justify-content:flex-start;scroll-snap-type:x mandatory}.detail-block{padding:5px 10px 5px 10px;height:100%;display:flex;flex-direction:column;align-items:center;box-sizing:border-box;flex:0 0 auto;scroll-snap-align:end;width:85px}.detail-container p{margin:0}.detail-container .detail-title{color:var(--dw-font-color-2)}.detail-container .detail-wea{color:var(--dw-font-color-2);white-space: nowrap;}.detail-container .detail-date{font-size:13px;color:var(--dw-font-color-1);font-weight:100}.detail-container .detail-weaicon{width:20px;height:20px;padding:5px}.detail-block .detail-graph{height:40px}.detail-block .detail-wind{font-size:14px;opacity:.6;color:var(--dw-font-color-1);margin-top:10px}.detail-block .detail-air{font-size:13px;opacity:.9;width:45px;margin:5px 0;text-align:center}.detail-container-up,.detail-container-down{display:flex}.detail-graph-container{width:auto;height:60px}.detail-graph{height:60px}.detail-block .detail-air.air-A{background:#a3e27f;color:#3fac00;border-radius:20px}.detail-block .detail-air.air-B{background:#ebe07c;color:#c2ae00;border-radius:20px}.detail-block .detail-air.air-C{background:#f1a88c;color:#d33c00;border-radius:20px}.detail-block .detail-windarrow{padding:5px}.error-block{position:absolute;z-index:99;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:var(--dw-background-color);transition:opacity .2s ease-in-out;opacity:0;pointer-events:none}.error-block p{font-size:20px;opacity:.5;color:var(--dw-font-color-2)}.detail-graph .graph-point{fill:var(--dw-background-color);stroke-width:2;stroke:var(--dw-graph-color)}.detail-graph .graph-line{stroke-width:2;stroke:var(--dw-graph-color);fill:transparent}.detail-graph .graph-text{font-size:13px;opacity:.9;fill:var(--dw-font-color-2)}</style><div class="main-data"><div class="error-block"><p>出错了</p></div><div class="main-block loading"><dw-icon class="weather-icon"></dw-icon><p class="weather">-</p><p class="temperature">-</p></div><div class="wrapper"><div class="container loading"><div class="data-container"><div class="data-block"><div class="value"><span class="data-wind">-</span><small>级</small></div><div class="desc"><span class="wind-arrow data-windarrow">A</span><span class="data-winddirection"></span>风</div></div><div class="data-block"><div class="value"><span class="data-humidity">-</span><small>%</small></div><div class="desc">湿度</div></div><div class="data-block"><div class="value"><span class="data-feelsLike">-</span><small>℃</small></div><div class="desc">体感</div></div><div class="data-block"><div class="value"><span class="data-pressure">-</span><small>hpa</small></div><div class="desc">气压</div></div></div><div class="suggest-container"><div class="suggest-block"><div class="value data-uvisuggestion">-</div><div class="desc data-uvi">紫外线</div></div><div class="suggest-block"><div class="value data-aqimark">-</div><div class="desc data-aqi">空气</div></div><div class="suggest-block"><div class="value data-carwashsuggestion">-</div><div class="desc data-carwash">洗车</div></div><div class="suggest-block"><div class="value data-sportssuggestion">-</div><div class="desc data-sports">运动</div></div></div></div></div></div><div class="detail-container" style="display: none;"><div class="detail-container-up"></div><div class="detail-graph-container"><div class="detail-graph detail-graph-day"></div></div><div class="detail-graph-container"><div class="detail-graph detail-graph-night"></div></div><div class="detail-container-down"></div></div></template>`;

        let templateContainer = document.createElement("div");
        templateContainer.style.display = "none !important";
        templateContainer.classList.add("dw-template-container");
        templateContainer.innerHTML = template;
        document.body.appendChild(templateContainer);

        // 注入css（字体）
        let css = `@font-face{font-family:"windArrows";src:url("data:application/octet-stream;base64,d09GMgABAAAAAAMUAAsAAAAABfgAAALHAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmQANBEQCoMsgkABNgIkAxYLFAAEIAWEIAcgH7cECJ6DceNcIpRSs/LeB6VouFyfHYuHj7HW+6te0QpNfDqhqGeSpqVZaGKZ0ODuStqKlHLiP9m9vUCekJz19+5+qOgDuUuZnjiwT3X1EdVuPzinyAIJI2ySTJPq5H/oZsBZUUAHApe2bQ2bnm+WMWmDBxTGASY6/l9cX71dv35KClkX7tII6UxPTEKa9JVNJoihUZ68gr3mCRIydLwG/hQzHSGLsg8fdpmBf6vu7Y5jBwhIfrFZBsD/SCCJFiuBFmu9QEpK8GH3Px/wf29AgJCUU1Bn878qyIMGUMIi8AhIgZQgP5XqalnLuuJJXWdwM1S6n2JvnS7fod3peutAe7bwEac/NPjheBG3G6fvXPAEfNrnoN1qmwWCb8982yOcTGHMqJPpjAa22DAkdTXu8zqjfAS4odONKgwE2Fzlgc1V2ljGG6RHO+efn+fNU0OKkbb05InS1pLWWjo1xm8ERYxlNm0HNeaXlxfE/F3/ap2M86O847PxwsHpyvyaLZ4X1TAOjgz+Za68w/Cc3HPxb73+/9s//ZuQc2/iO2eQ//dNyPtzqPLQij+3/30D2wA2C6ZfikH8OwEEgu57fTlaLfrKIQde9csDgFeTY/6v8S9WNzZXyAgQZI//rfIPlqswcSwAAIkUO8FIuespFsibYA2C9eXssRKpPLbADoR+SpBQsaUnTXM25QVpB05BRm9FbFtwVBW66CmRKOMwEnKkV5Vy9ap06FSnVbdO1VIgGdJkSC9DyklJIR1YNIZI0LuOJCDxNEiEDiSamtQ4XpVe9Sq1aoFoseQI5Xg8BS1BgR4knoClIIekS5EmjdsKtcJEChNIvGaTMsuFai7zRZV4pHEihd/PlCJtlTPkgGNIjizJJrDE5OHV7cJgP0BTYcR75DhgcSxGIkj1E6gcHS2bjFARvgxS9+HLJWuiQGNhKTAFGSvgP/MmAAA=") format("woff2"),url("data:application/font-woff;base64,d09GRgABAAAAAASYAAsAAAAABfgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABdAAAAE4AAABkIzNa5GNtYXAAAAHYAAAALQAAADQADOBaZ2FzcAAABIgAAAAQAAAAEAAZACFnbHlmAAACHAAAAUAAAAGsD4OsEmhlYWQAAAEIAAAANAAAADYX5e8oaGhlYQAAATwAAAAfAAAAJA3yBP5obXR4AAABxAAAABMAAAAWCz8B+GxvY2EAAAIIAAAAFAAAABQCWALubWF4cAAAAVwAAAAYAAAAIAAOADpuYW1lAAADXAAAARcAAAIgKkNGyHBvc3QAAAR0AAAAEwAAACD/KgCWeNpjYGRgYABiueUn98bz23xl4ORgAIG7lbOiwHQNl+Uvi/+XmOewngBy2UBqGRgAT5MMWnjaY2BkYGCv/BfLIMGWzGDOYM2mwQAUQQFMAFI1AwEAeNpjYGRgYOBksGRgYQABRgY0AAAHMABJeNpjYGWTZ5zAwMrAwDqL1ZiBgdEYQjPPYkhjEmJgYGJgY0AAASS2h4+CAqPDA4YH7Gza/2IZzrJXMi4GCjOC5Jj3sc6Cqfv/HwAZVg2KAAB42mNhYEhhS2ZIZTBHxgAjEQNCAHjaY2BgYGJgYGAGYhEgyQimWRgUgDQLEAL5D9j//weSDP//KzCC5RkAWgEGRAAAAAAAAFYAZgB2AIYAlgCmALYAxgDWeNpljs1OwkAURu+dOjTTGpoKWH8IWCpNmpgSGMCCf4SNJrrgAUyIkTQufR7CzgfwIdy4YWNMfAk3rEiGltqBuEDv9uR898AWjACUCR2DAiocQwDATdus2qZttU/bvLFbyGfULBbyluO2mjutputU1Iyak6yMKTUw41RqmMKREkSCfMYnr+XD1tn9s9+7utk7cl76Xbd8UOp1dKZtB0wLsqrOLlQ6FmGDtr+LRmk4qD8OBk81d/jA77B42+mbxn6UdDX9XGe6fpnVrhnTAEUI6a1aoc5IzGNOpnIHRxKgCJIP8Oib5JQhXfq4EAaZ+3S2pMmmbzMiwrVLpmQa87X/lfrvkluoUC+1YubRWcyS1f6mL7/LBjpeTmTBhk+xqohgpXq4SMgc/vVLS4S/3//256oY8dQThk/mCS7gB1hTbvx42nWQT0vDQBDFf7FV1IOfYenZSq3iwXqJVqkgClr1HNc0BtRIUv99JMEP6dtJKDlYltl5M/P2zewA68zoEHU3gAdZjSN6vDV4hS1VatzhaJHvtjirfPDb4DVc1GvwJl/RMVO+xUzVKcHLO35kY2LOdV9zw4QrbuVP2VFlyEC2azjmWceJlZPxxJzKolQ+pVTflEeLM97FTJQbcy/lE2leivupl6/ixKqUFIorDrmz15VqharOug10luVHUvPqXmgXgREq261ZR5zZi7n6lmIkxq15e6ZR25ADyzj5ffpSy8VsT/zfvFP9PLefz5ou4V+JZfyiX9iE0xYqU8iEl80UdIL2i9Ck2WyfC2UyRV5z+lD9A008Ty4AeNpjYGYAg//qDNMYsAAAKDQBwAAAAQADAAgACgARAAX//wAP") format("woff")}`;

        let fontStyle = document.createElement("style");
        fontStyle.textContent = css;
        document.body.appendChild(fontStyle);
    }


    // 天气索引
    const WeatherList = { 0: '晴', 1: '多云', 2: '阴', 3: '阵雨', 4: '雷阵雨', 5: '雷阵雨并伴有冰雹', 6: '雨夹雪', 7: '小雨', 8: '中雨', 9: '大雨', 10: '暴雨', 11: '大暴雨', 12: '特大暴雨', 13: '阵雪', 14: '小雪', 15: '中雪', 16: '大雪', 17: '暴雪', 18: '雾', 19: '冻雨', 20: '沙尘暴', 21: '小雨-中雨', 22: '中雨-大雨', 23: '大雨-暴雨', 24: '暴雨-大暴雨', 25: '大暴雨-特大暴雨', 26: '小雪-中雪', 27: '中雪-大雪', 28: '大雪-暴雪', 29: '浮尘', 30: '扬沙', 31: '强沙尘暴', 32: '飑', 33: '龙卷风', 34: '若高吹雪', 35: '轻雾', 53: '霾', 99: '未知' }

    // 天气图标索引（并未覆盖所有天气）
    const WeatherENList = { 0: 'sunny', 1: 'partly_cloudy', 2: 'cloudy', 3: 'showers', 4: 'thundershowers', 5: 'thunderstorm_with_hail', 6: 'rain_and_snow', 7: 'light_rain', 8: 'mid_rain', 9: 'heavy_rain', 10: 'rainstorm', 11: 'heavy_rainstorm', 12: 'extraordinary_rainstorm', 13: 'snow_showers', 14: 'little_snow', 15: 'mid_snow', 16: 'heavy_snow', 17: 'blizzard', 18: 'fog', 19: 'freezing_rain', 20: 'sandstorm', 21: 'mid_rain', 22: 'heavy_rain', 23: 'heavy_rain_to_rainstorm', 24: 'rainstorm_to_heavy_rainstorm', 25: 'heavy_rainstorm_to_extraordinary_rainstorm', 26: 'little_snow_to_mid_snow', 27: 'mid_snow_to_heavy_snow', 28: 'heavy_snow_to_blizzard', 29: 'floating_dust', 30: 'raising_sand', 31: 'strong_sandstorm', 32: 'whirlwind', 33: 'tornado', 34: 'wakaka_blows_snow', 35: 'light_mist', 53: 'haze', 99: 'unknown' }
    //const WeatherENList = { 0: 'sunny', 1: 'partly_cloudy', 2: 'cloudy', 3: 'showers', 4: 'thundershowers', 5: 'thunderstorm_with_hail', 6: 'rain_and_snow', 7: 'light_rain', 8: 'mid_rain', 9: 'heavy_rain', 10: 'rainstorm', 11: 'heavy_rainstorm', 12: 'extraordinary_rainstorm', 13: 'snow_showers', 14: 'little_snow', 15: 'mid_snow', 16: 'heavy_snow', 17: 'blizzard', 18: 'fog', 19: 'freezing_rain', 20: 'sandstorm', 21: 'little_rain_to_mid_rain', 22: 'mid_rain_to_heavy_rain', 23: 'heavy_rain_to_rainstorm', 24: 'rainstorm_to_heavy_rainstorm', 25: 'heavy_rainstorm_to_extraordinary_rainstorm', 26: 'little_snow_to_mid_snow', 27: 'mid_snow_to_heavy_snow', 28: 'heavy_snow_to_blizzard', 29: 'floating_dust', 30: 'raising_sand', 31: 'strong_sandstorm', 32: 'whirlwind', 33: 'tornado', 34: 'wakaka_blows_snow', 35: 'light_mist', 53: 'haze', 99: 'unknown' }

    // 卡片类型定义
    const CardTypeList = ["normal", "small", "medium", "detail"];

    class DouWeatherCard extends HTMLElement {
        // 监听location属性和type的更新
        static get observedAttributes() { return ["type", "location"]; }

        attributeChangedCallback(_name, oldValue, newValue) {
            if (this.time) {
                if (new Date().getTime() - this.time < 1000) {
                    return;
                }
                this.time = new Date().getTime();
            }
            if (oldValue != newValue) {
                this.toggleLoading(false);
                this.update();
            }
        }

        constructor() {
            super();
            let shadow = this.attachShadow({ mode: 'open' });
            let template = document.getElementById('douWeatherCardTemplate');
            let content = template.content.cloneNode(true);

            shadow.appendChild(content);

            this.update();
        }



        update() {
            let shadow = this.shadowRoot;



            // 获取天气位置参数
            let location = this.getAttribute('location');
            // 获取卡片类型参数
            let type = this.getAttribute('type');
            type = this.dw_type = CardTypeList.includes(type) ? type : "normal";
            // 针对卡片类型简单修改一些布局
            if (type == "small") {
                this.style.width = this.style.maxWidth = this.style.minWidth = "180px"
            } else if (type == "medium") {
                shadow.querySelector(".container").style.width = "290px";
                this.style.maxWidth = "470px"
                shadow.querySelector(".suggest-container").style.display = "none";
            } else if (type == "detail") {
                shadow.querySelector(".container").style.width = "485px";
                shadow.querySelector(".detail-container").style.display = "flex";
            } else {
                shadow.querySelector(".container").style.width = "485px";
            }

            // 出错展示方法
            const showErrorMessage = (el) => {
                el.querySelector(".error-block").style.opacity = "1";
            }

            fetch(`https://api.daidr.me/apis/weather?location=${location}`)
                .then(body => body.json())
                .then(json => {
                    let data = json;

                    this.cityName = data.location;

                    // 尽量提取天气接口中的重要信息，便于后期自定义数据源
                    let weatherData = {
                        current: {
                            feelsLike: {
                                unit: data.current.feelsLike.unit,
                                value: data.current.feelsLike.value
                            },
                            humidity: {
                                unit: data.current.humidity.unit,
                                value: data.current.humidity.value
                            },
                            pressure: {
                                unit: data.current.pressure.unit,
                                value: data.current.pressure.value
                            },
                            wind: {
                                direction: {
                                    unit: data.current.wind.direction.unit,
                                    value: data.current.wind.direction.value
                                },
                                speed: {
                                    unit: data.current.wind.speed.unit,
                                    value: data.current.wind.speed.value
                                }
                            },
                            weather: data.current.weather,
                            uvIndex: data.current.uvIndex,
                        },
                        weather: {
                            value: data.forecastDaily.weather.value
                        },
                        temperature: {
                            unit: data.forecastDaily.temperature.unit,
                            value: data.forecastDaily.temperature.value,
                        },
                        wind: {
                            direction: {
                                unit: data.forecastDaily.wind.direction.unit,
                                value: data.forecastDaily.wind.direction.value
                            },
                            speed: {
                                unit: data.forecastDaily.wind.speed.unit,
                                value: data.forecastDaily.wind.speed.value
                            },
                        },
                        aqi: {
                            value: data.forecastDaily.aqi.value
                        },
                        suggestions: {
                            carWash: -1,
                            sports: -1
                        }
                    }

                    // 遍历查找接口中carWash和sports字段
                    for (let el of Object.values(data.indices.indices)) {
                        if (el.type == "carWash") {
                            weatherData.suggestions.carWash = el.value
                        } else if (el.type == "sports") {
                            weatherData.suggestions.sports = el.value
                        }
                    }

                    // 角度转风向
                    const getWindDirection = (direction) => {
                        if (direction >= 22.5 && direction < 67.5) {
                            return ["东北", "\ue005"];
                        } else if (direction >= 67.5 && direction < 112.5) {
                            return ["东", "\ue006"];
                        } else if (direction >= 112.5 && direction < 157.5) {
                            return ["东南", "\ue007"];
                        } else if (direction >= 157.5 && direction < 202.5) {
                            return ["南", "\ue000"];
                        } else if (direction >= 202.5 && direction < 247.5) {
                            return ["西南", "\ue001"];
                        } else if (direction >= 247.5 && direction < 292.5) {
                            return ["西", "\ue002"];
                        } else if (direction >= 292.5 && direction < 337.5) {
                            return ["西北", "\ue003"];
                        } else {
                            return ["北", "\ue004"];
                        }
                    }

                    // 速度转风速等级
                    const getWindLevel = (speed) => {
                        if (speed <= 1) {
                            return "0";
                        } else if (speed <= 5) {
                            return "1";
                        } else if (speed <= 11) {
                            return "2";
                        } else if (speed <= 19) {
                            return "3";
                        } else if (speed <= 28) {
                            return "4";
                        } else if (speed <= 38) {
                            return "5";
                        } else if (speed <= 49) {
                            return "6";
                        } else if (speed <= 61) {
                            return "7";
                        } else if (speed <= 74) {
                            return "8";
                        } else if (speed <= 88) {
                            return "9";
                        } else if (speed <= 102) {
                            return "10";
                        } else if (speed <= 117) {
                            return "11";
                        } else if (speed <= 134) {
                            return "12";
                        } else if (speed <= 149) {
                            return "13";
                        } else if (speed <= 166) {
                            return "14";
                        } else if (speed <= 183) {
                            return "15";
                        } else if (speed <= 201) {
                            return "16";
                        } else if (speed <= 220) {
                            return "17";
                        } else {
                            return "17+";
                        }
                    }

                    // uvi转紫外线强度&防晒建议
                    const getUVISuggestion = (uvi) => {
                        if (uvi <= 2) {
                            return ["紫外线弱", "无需防晒"];
                        } else if (uvi <= 5) {
                            return ["紫外线中", "记得防晒"];
                        } else if (uvi <= 7) {
                            return ["紫外线强", "涂防晒霜"];
                        } else if (uvi <= 10) {
                            return ["紫外线很强", "带遮阳伞"];
                        } else {
                            return ["紫外线超强", "SPF30+"];
                        }
                    }

                    // aqi转空气质量
                    const getAQImark = (aqi) => {
                        if (aqi <= 50) {
                            return [aqi, "空气很好", "A", "优"];
                        } else if (aqi <= 100) {
                            return [aqi, "空气良好", "B", "良"];
                        } else if (aqi <= 150) {
                            return [aqi, "轻度污染", "C", "轻度"];
                        } else if (aqi <= 200) {
                            return [aqi, "中度污染", "C", "中度"];
                        } else if (aqi <= 300) {
                            return [aqi, "重度污染", "C", "重度"];
                        } else {
                            return [aqi, "严重污染", "C", "差"];
                        }
                    }

                    let content = this.shadowRoot;
                    let type = this.dw_type;

                    // 左侧天气概览
                    content.querySelector('.weather-icon').setAttribute('type', WeatherENList[weatherData.current.weather]);
                    content.querySelector('.main-block>.weather').innerText = WeatherList[weatherData.current.weather];
                    content.querySelector('.main-block>.temperature').innerText = `${weatherData.temperature.value[0].from}${weatherData.temperature.unit} / ${weatherData.temperature.value[0].to}${weatherData.temperature.unit}`;

                    if (type != "small") {
                        // 右侧天气数据
                        content.querySelector('.data-wind').innerText = getWindLevel(weatherData.current.wind.speed.value);
                        let windDirectionData = getWindDirection(weatherData.current.wind.direction.value);
                        content.querySelector('.data-winddirection').innerText = windDirectionData[0];
                        content.querySelector('.data-windarrow').innerText = windDirectionData[1];

                        content.querySelector('.data-humidity').innerText = weatherData.current.humidity.value;
                        content.querySelector('.data-feelsLike').innerText = weatherData.current.feelsLike.value;
                        content.querySelector('.data-pressure').innerText = weatherData.current.pressure.value;

                        if (type != "medium") {
                            // 右侧天气数据
                            let uviData = getUVISuggestion(weatherData.current.uvIndex);
                            content.querySelector('.data-uvisuggestion').innerText = uviData[1];
                            content.querySelector('.data-uvi').innerText = uviData[0];

                            let aqiData = getAQImark(weatherData.aqi.value[0]);
                            content.querySelector('.data-aqimark').innerText = aqiData[1];
                            content.querySelector('.data-aqi').innerText = `AQI ${aqiData[0]}`;

                            let carWashData = weatherData.suggestions.carWash;
                            content.querySelector('.data-carwashsuggestion').innerText = carWashData ? "不宜洗车" : "适宜洗车";
                            content.querySelector('.data-carwash').innerText = carWashData ? "可能有雨" : "最近无雨";

                            let sportsData = weatherData.suggestions.sports;
                            content.querySelector('.data-sportssuggestion').innerText = sportsData ? "适宜运动" : "不宜运动";
                            content.querySelector('.data-sports').innerText = aqiData[1];
                        }
                    }

                    if (type == "detail") {
                        // 下方详细数据&图表

                        // 索引转星期
                        const genWeekFromIndex = (index) => {
                            let date = new Date();
                            date.setDate(date.getDate() + index);
                            return `周${"日一二三四五六"[date.getDay()]}`;
                        }
                        // 索引转日期
                        const genDateFromIndex = (index) => {
                            let date = new Date();
                            date.setDate(date.getDate() + index);
                            return `${date.getMonth() + 1}月${date.getDate()}日`;
                        }
                        // 之后会用到的容器元素
                        const detailContainerUp = content.querySelector(".detail-container-up");
                        const detailContainerDown = content.querySelector(".detail-container-down");
                        const detailGraphDay = content.querySelector(".detail-graph-day");
                        const detailGraphNight = content.querySelector(".detail-graph-night");

                        // 清空容器元素
                        detailContainerUp.innerHTML = "";
                        detailContainerDown.innerHTML = "";
                        detailGraphDay.innerHTML = "";
                        detailGraphNight.innerHTML = "";

                        // 绘制图表用的坐标信息及温度信息
                        let pointXList = [];
                        let temperatureDayList = [];
                        let temperatureNightList = [];
                        let pointDayYList = [];
                        let pointNightYList = [];

                        for (let i = 0; i < weatherData.weather.value.length; i++) {

                            // 细节的上半部分
                            {
                                // 标题 - 日期描述
                                // 当天描述为 “ 今天 ”
                                // 其余日期用 “ 周X ” 描述
                                let title = document.createElement("p");
                                if (i == 0) {
                                    title.textContent = "今天"
                                } else {
                                    title.textContent = genWeekFromIndex(i);
                                }
                                title.classList.add("detail-title");

                                // 副标题 - 日期
                                let date = document.createElement("p");
                                date.textContent = genDateFromIndex(i);
                                date.classList.add("detail-date");

                                // 早上的天气图标
                                let weaicon = document.createElement("dw-icon");
                                weaicon.setAttribute("type", WeatherENList[weatherData.weather.value[i].from]);
                                weaicon.classList.add("detail-weaicon");
                                weaicon.classList.add("detail-weaicon-day");

                                // 早上的天气描述
                                let wea = document.createElement("p");
                                wea.textContent = WeatherList[weatherData.weather.value[i].from];
                                wea.classList.add("detail-wea");
                                wea.classList.add("detail-wea-day");

                                // 早上部分的数据容器
                                let block = document.createElement("div");
                                block.classList.add("detail-block");

                                block.appendChild(title);
                                block.appendChild(date);
                                block.appendChild(weaicon);
                                block.appendChild(wea);

                                detailContainerUp.appendChild(block);
                            }

                            // 细节的下半部分
                            {
                                // 晚上的天气图标
                                let weaicon = document.createElement("dw-icon");
                                weaicon.setAttribute("type", WeatherENList[weatherData.weather.value[i].to]);
                                weaicon.classList.add("detail-weaicon");
                                weaicon.classList.add("detail-weaicon-night");

                                // 晚上的天气描述
                                let wea = document.createElement("p");
                                wea.textContent = WeatherList[weatherData.weather.value[i].to];
                                wea.classList.add("detail-wea");
                                wea.classList.add("detail-wea-night");

                                // 全天的风信息概览
                                let wind = document.createElement("p");
                                wind.classList.add("detail-wind");
                                let windArrow = document.createElement("span");
                                windArrow.classList.add("wind-arrow");
                                windArrow.classList.add("detail-windarrow");
                                windArrow.textContent = getWindDirection(weatherData.wind.direction.value[i].from)[1];
                                wind.appendChild(windArrow);
                                wind.appendChild(document.createTextNode(`${getWindLevel(weatherData.wind.speed.value[i].from)}级`));

                                // 全天的空气质量
                                let aqiData = getAQImark(weatherData.aqi.value[i]);
                                let aqi = document.createElement("p");
                                aqi.textContent = aqiData[3];
                                aqi.classList.add("detail-air");
                                aqi.classList.add(`air-${aqiData[2]}`);

                                // 晚上部分的数据容器
                                let block = document.createElement("div");
                                block.classList.add("detail-block");

                                block.appendChild(weaicon);
                                block.appendChild(wea);
                                block.appendChild(wind);
                                block.appendChild(aqi);

                                detailContainerDown.appendChild(block);
                            }

                            // 折线图容器初始化
                            // 设定宽度
                            detailGraphDay.style.width = detailGraphNight.style.width = `${detailContainerUp.scrollWidth}px`;

                            // 计算并填充X坐标（目前版本为固定值，每个点X坐标之间相差42.5px）
                            pointXList.push(42.5 + i * 85);

                            // 填充温度数据
                            temperatureDayList.push(weatherData.temperature.value[i].from);
                            temperatureNightList.push(weatherData.temperature.value[i].to);


                        }

                        // 绘制折线图
                        {
                            const graphHeight = 60;
                            const graphBreak = 15;
                            // 求点Y坐标 day
                            {
                                let max = Math.max.apply(Math, temperatureDayList);
                                let min = Math.min.apply(Math, temperatureDayList);
                                let factor = (graphHeight - 2 * graphBreak) / (max - min);
                                for (let tem of temperatureDayList) {
                                    pointDayYList.push(graphHeight - (tem - min) * factor - graphBreak);
                                }
                            }
                            // 求点Y坐标 night
                            {
                                let max = Math.max.apply(Math, temperatureNightList);
                                let min = Math.min.apply(Math, temperatureNightList);
                                let factor = (graphHeight - 2 * graphBreak) / (max - min);
                                for (let tem of temperatureNightList) {
                                    pointNightYList.push(graphHeight - (tem - min) * factor - graphBreak);
                                }
                            }

                            drawGraph(detailContainerUp, pointDayYList, temperatureDayList, detailGraphDay);
                            drawGraph(detailContainerDown, pointNightYList, temperatureNightList, detailGraphNight);

                            // 绘制日夜折线图的通用方法
                            function drawGraph(container, pointYList, temperatureList, svgContainer) {
                                // 创建svg
                                let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                svg.setAttribute("style", "width:100%;height:100%;");
                                svg.setAttribute("viewBox", `0 0 ${container.scrollWidth} 40`);

                                // 线绘制
                                {
                                    let line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                    line.classList.add("graph-line");
                                    let linePath = "";
                                    for (let i in pointXList) {
                                        // 第一个点使用moveto，从第二个点开始使用lineto
                                        let notation = i == 0 ? "M" : "L";
                                        linePath += `${notation}${pointXList[i]} ${pointYList[i]} `;
                                    }
                                    line.setAttribute("d", linePath);
                                    svg.appendChild(line);
                                }

                                // 点绘制
                                {
                                    for (let i in pointXList) {
                                        let point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                                        point.setAttribute("cx", pointXList[i]);
                                        point.setAttribute("cy", pointYList[i]);
                                        point.setAttribute("r", 3);
                                        point.classList.add("graph-point");
                                        svg.appendChild(point);
                                    }
                                }

                                // 字绘制
                                {
                                    for (let i in pointXList) {
                                        let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                                        text.textContent = `${temperatureList[i]}℃`;
                                        text.setAttribute("x", pointXList[i] - 15);
                                        text.setAttribute("y", pointYList[i] - 10);
                                        text.classList.add("graph-text");
                                        svg.appendChild(text);
                                    }
                                }

                                svgContainer.appendChild(svg);
                            }


                        }
                    }

                    //结束加载
                    this.toggleLoading(true);
                })
                .catch((e) => {
                    console.error(e);
                    showErrorMessage(this.shadowRoot);
                })
        }

        toggleLoading(isFinished) {
            if (isFinished) {
                if (this.dw_type == "detail") {
                    this.style.height = "535px";
                }
                this.shadowRoot.querySelector('.main-block').classList.remove("loading");
                this.shadowRoot.querySelector('.container').classList.remove("loading");
                this.setPositionText(this.cityName.split(".").reverse()[0]);
            } else {
                this.shadowRoot.querySelector(".error-block").style.opacity = "0";
                if (this.dw_type == "detail") {
                    this.style.height = "180px";
                }
                this.shadowRoot.querySelector('.main-block').classList.add("loading");
                this.shadowRoot.querySelector('.container').classList.add("loading");
                this.setPositionText("");
            }
        }

        setPositionText(text) {
            this.shadowRoot.querySelector("#positionStyle")
                .textContent = `:host::after{content: '${text}';}`;
        }
    }

    window.customElements.define('douweather-card', DouWeatherCard);
}