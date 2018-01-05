<template>
    <div class="Yep-common-area-pick">
        <div class="mask" :class="maskShowOrHide">
            <div class="area-wrap" :style="showStyle">
                <div class="area-nav">
                    收票人地区<span class="close" @click="close">×</span>
                </div>
                <div class="area-title">
                    <span class="pctc "
                          v-for="(item,key) in comCurrentAreaInfos.nameArr"
                          :class="{'cur-span':comCurrentAreaInfos.currentIndex===key}"
                          @click="handleAreaNameSelect(comCurrentAreaInfos.idArr[key>0?key-1:0],key)"
                    >{{item}}</span>
                </div>
                <div class="area-content">
                    <ul>
                        <li
                                v-for="(item,index) in comAreaContent[comCurrentAreaInfos.idArr[comCurrentAreaInfos.currentIndex-1] || -1]"
                                :class="{'cur-li':item.id==(comCurrentAreaInfos.idArr[comCurrentAreaInfos.currentIndex] || comCurrentAreaInfos.lastId)}"
                                @click="handleAreaListNum(item,index)">
                            {{item.name}}
                            <span class="chosed"></span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import areaPickService from './../../../assists/js/areaPickService'

    export default {
        name: 'areaPick',
        data() {
            return {
                lock: false,
                areaContent: {
                    "-1": [
                        {
                            id: '1', name: '北京'
                        },
                        {
                            id: '2',
                            name: '上海',

                        }
                        ,
                        {
                            id: '3', name: '天津'
                        }
                        ,
                        {
                            id: '4',
                            name: '重庆',

                        }
                        ,
                        {
                            id: '5', name: '河北'
                        }
                        ,
                        {
                            id: '6',
                            name: '山西',

                        }
                        ,
                        {
                            id: '7', name: '河南'
                        }
                        ,
                        {
                            id: '8',
                            name: '辽宁',

                        }
                        ,
                        {
                            id: '9', name: '吉林'
                        }
                        ,
                        {
                            id: '10',
                            name: '黑龙江',

                        }
                        ,
                        {
                            id: '11', name: '内蒙古'
                        }
                        ,
                        {
                            id: '12',
                            name: '江苏',

                        }
                        ,
                        {
                            id: '13', name: '山东'
                        }
                        ,
                        {
                            id: '14',
                            name: '安徽',

                        }
                        ,
                        {
                            id: '15', name: '浙江'
                        }
                        ,
                        {
                            id: '16',
                            name: '福建',

                        }
                        ,
                        {
                            id: '17', name: '湖北'
                        }
                        ,
                        {
                            id: '18',
                            name: '湖南',

                        }
                        ,
                        {
                            id: '19', name: '广东'
                        }
                        ,
                        {
                            id: '20',
                            name: '广西',

                        }
                        ,
                        {
                            id: '21', name: '江西'
                        }
                        ,
                        {
                            id: '22',
                            name: '四川',

                        }
                        ,
                        {
                            id: '23', name: '海南'
                        }
                        ,
                        {
                            id: '24',
                            name: '贵州',

                        }
                        ,
                        {
                            id: '25', name: '云南'
                        }
                        ,
                        {
                            id: '26',
                            name: '西藏',

                        }
                        ,
                        {
                            id: '27', name: '陕西'
                        }
                        ,
                        {
                            id: '28',
                            name: '甘肃',

                        }
                        ,
                        {
                            id: '29', name: '青海'
                        }
                        ,
                        {
                            id: '30',
                            name: '宁夏',

                        }
                        ,
                        {
                            id: '31', name: '新疆'
                        }
                        ,
                        {
                            id: '52993',
                            name: '港澳',

                        }
                        ,
                        {
                            id: '32', name: '台湾'
                        }
                        ,
                        {
                            id: '84',
                            name: '钓鱼岛'
                        }
                    ]
                },
                titleShowOrHide: {
                    province: true,
                    city: false,
                    town: false,
                    district: false,
                    name: '请选择',
                    cityName: '请选择',
                    townName: '请选择',
                    districtName: '请选择'
                }
                ,

                areaLength: 0,
                areaId: this.propsAreaId || '1',
                areaName: this.propsAreaName || '北京',
                currentIndex: this.propsAreaName ? this.propsAreaId.split(',').length - 1 : 0,
            }
        },
        props: ['isShow', 'propsAreaId', 'propsAreaName'],
        created() {
            this.getChildrenArea(this.areaId.split(',')[this.areaId.split(',').length - 2]);

        },
        computed: {
            comAreaContent() {
                return this.areaContent;
            },
            comCurrentAreaInfos() {
                return {
                    idStr: this.areaId || '1',
                    idArr: this.areaId ? this.areaId.split(',') : '1',
                    nameStr: this.areaName || '北京',
                    nameArr: this.areaName ? this.areaName.split(',') : '北京',
                    getChildrenAreaParamId: this.areaId.split(',')[this.areaId.split(',').length - 2],
                    currentIndex: this.currentIndex,
                    lastId: this.areaId.split(',')[this.areaId.split(',').length - 1]
                }
            },

            showOrHide() {
                return this.isShow ? 'show' : 'hide';
            },
            maskShowOrHide() {
                return this.isShow ? 'mask-show' : 'mask-hide';
            },
            showStyle() {
                return this.isShow ? '-webkit-transform: translate3d(0,-' + document.documentElement.style.fontSize.replace('px', '') * 6.4 + 'px,0);' : '-webkit-transform: translate3d(0,' + document.documentElement.style.fontSize.replace('px', '') * 6.4 + 'px,0);';
            },

        },
        methods: {
            // 点击areaContent
            handleAreaListNum(item, key) {

                if (this.lock) {
                    return;
                }
                this.lock = true
                this.areaId = this.comCurrentAreaInfos.idArr.splice(this.currentIndex, 999) && this.comCurrentAreaInfos.idArr.push(item.id) && this.comCurrentAreaInfos.idArr.join(',')
                this.areaName = this.comCurrentAreaInfos.nameArr.splice(this.currentIndex + 1, 999) && this.comCurrentAreaInfos.nameArr.fill(item.name, this.currentIndex, this.currentIndex + 1).push('请选择') && this.comCurrentAreaInfos.nameArr.join(',')

                this.getChildrenArea(item.id, true)
            },
            close() {
                this.$emit('closeAreaPick', this.areaId, this.areaName);
            },
            // 点击areaName
            handleAreaNameSelect(id, key) {
                this.currentIndex = key;
                if (key === 0) {
                    return;
                }
                this.getChildrenArea(id)

            },

            getChildrenArea(id, next) {

                if (typeof(this.areaContent[id]) !== 'undefined' || typeof(id) === 'undefined') {
                    if (next) {
                        this.currentIndex = this.currentIndex + 1
                    }
                    this.lock = false;
                    return;
                }
                areaPickService.getArea(id).then(res => {
                    this.lock = false;
                    if (res.length !== 0) {
                        let obj = {};
                        obj[id] = res
                        this.areaContent = Object.assign({}, this.areaContent, obj)
                        console.log(this.areaContent);
                        if (next) {
                            this.currentIndex = this.currentIndex + 1
                        }

                    } else {
                        this.areaName = this.areaName.replace(',请选择', '')
                        this.close();
                    }

                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    $text: #333;
    $border-color: #e3e5e9;
    .Yep-common-area-pick {
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.35);
            z-index: -1;
        }
        .area-wrap {
            position: fixed;
            height: 6.4rem;
            bottom: -6.4rem;
            left: 0;
            width: 100%;
            background-color: #fff;
            font-size: 0.28rem;
            transition: all 500ms;
            -webkit-transition: all 500ms;
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
            .area-nav {
                height: 0.8rem;
                width: 100%;
                line-height: 0.6rem;
                padding: 0.2rem 0 0 0.2rem;
                position: relative;
                .close {
                    position: absolute;
                    top: 0.2rem;
                    width: 0.4rem;
                    height: 0.4rem;
                    color: $text;
                    font-size: 0.4rem;
                }
                .close {
                    right: 0.2rem;
                }
            }
            .area-title {
                height: 0.8rem;
                line-height: 0.8rem;
                border-bottom: 1px $border-color solid;
                .pctc {
                    float: left;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    vertical-align: middle;
                    color: #333;
                    margin-right: 0.2rem;
                    font-size: 0.24rem;
                    &:first-child {
                        margin-left: 0.2rem;
                    }
                    &.cur-span {
                        border-bottom: 2px #e4393c solid;
                        color: #e4393c;
                    }
                }
            }
            .area-content {
                height: 4.8rem;
                overflow: auto;
                #cityUl, #townUl {
                    display: none;
                }
                li {
                    height: 0.9rem;
                    line-height: 0.9rem;
                    padding: 0 0.2rem;
                    color: #333;
                    font-size: 0.24rem;
                    border-bottom: 1px $border-color solid;
                    text-align: left;
                    span {
                        width: 0.25rem;
                        height: 0.17rem;
                        margin: 0.325rem 0 0 0.3rem;
                    }
                }
                .cur-li {
                    span {
                        display: inline-block;
                        width: 0.25rem;
                        height: 0.17rem;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAAougcOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjExNzdlNC02M2Q5LTRjZDUtOGEyYi1mOTZlYzJkYTY2ZDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEU4NzA4MTYwMUVDMTFFNjhDM0RGNEFERDcxMkVEMzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEU4NzA4MTUwMUVDMTFFNjhDM0RGNEFERDcxMkVEMzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMDczM2VlLWI5NDctNDhhNi04NjI0LTIyMWNiZWE3Yjg5ZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxZjExNzdlNC02M2Q5LTRjZDUtOGEyYi1mOTZlYzJkYTY2ZDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pSQVjAAABQ0lEQVR42rTUzSsEcRzH8V1POXGQhyWJaJNNk/wJSxxIokgOLs6u/h7lIYpyYMtzSlJ72T9Dwh4kUt7f+vxqmprZ2W1m6tW2zbTv/c33N5Otel4m7aMlxd/uwxEqaUX6cYM8frIp3K5BXGMMZcwmvZIhrWAELxbAR1OCgWHcK/CEGQvYiaQiowrYSh4xh0930kXWsIvmBgI23DvN4gHzqPovcIOvoIADbOIvZmBcQ87pcxFfwYvcSra1vHWFWmME7E/dKlAKC/gjblDvWMUh2iICnnZRLy6wFBYIDt62XBFvWMZJSGgKV+jGuQLfUUsO7q6yQq9YwBnafeenFejCKVbsia51X8Oe+IIG2aP7bSubxCU6cYwN/MbZHVGvFf/OsZlNoKOBHZip9e7KKzSg73vYqicQJ+Ke5n08Y6fegB3/AgwAhyNIMz8opOkAAAAASUVORK5CYII=) no-repeat;
                        background-size: cover;
                    }
                }
            }
        }

        .mask-show {
            opacity: 1;
            z-index: 998;
        }
        .mask-hide {
            opacity: 0;
            z-index: -1;
        }
    }
</style>
