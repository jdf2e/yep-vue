<template>
    <form class="Yep-search-bar"  action="" onsubmit="return false;" >
        <div class="input-wrapper">
            <input type="search" class="search-input" :placeholder="ph" v-model="message" @keyup.enter="search(message)"  @focus="focusEvt(message)" @blur="blurEvt(message)">
            <div class="search-btn" @click="search(message)"></div>
        </div>
    </form>
</template>
<script>
    export default {
        data () {
            return {
                message: ''
            }
        },
        props: ['ph'],
        created: function () {
        },
        methods: {
            search: function (message) {
                this.$emit('handleSearch',message);
            },
            focusEvt(message) {
                this.$emit('focusEvt',message);
            },
            blurEvt(message) {
                this.$emit('blurEvt',message);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
    @import './../../../assists/css/mixin.scss';
    .Yep-search-bar{
        padding: 0.2rem;
        background-color: #e4e4e4;
        position: relative;
        width:100%;
        @include box;
        .input-wrapper{
            position:relative;
            width:100%;
        }
        .top-category{
            display: inline-block;
            width: 0.5rem;
            font-size: 0.24rem;
            padding-top: 0.44rem;
            text-align: center;
            color: #5a5a5a;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QzMxMjE0NTQwRjYxMUU3OUFFREM3RUFDMkQzNzc4MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QzMxMjE0NjQwRjYxMUU3OUFFREM3RUFDMkQzNzc4MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZDMzEyMTQzNDBGNjExRTc5QUVEQzdFQUMyRDM3NzgwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZDMzEyMTQ0NDBGNjExRTc5QUVEQzdFQUMyRDM3NzgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VRvSZgAABThJREFUeNrUmn9olVUYx89Ok3vbdJrij5k5SVci1nSaDbMIi4SmWz+krDRQMgX7o5SCLDQtjYrIf2ZpqCCl+GPZykmZSUTgaGip2B9bg9xoS2NS80dbwm7fx32PHd/d9/re9x7xvg98uC/nfe853+e858dznntzKioqlI+NBI+DcjAaFIIY6ACt4Bj4HHwBzqtwNpRtzAK3sY0bWZ+0cYL17wF/JasgJ4kDg8AbYBHow7IzoA10gv5gOMjjvVNgFdgAugMK7wdeBS9SsKJAaeMC6Ms2+ln33gbrwL92RdpTcQk4DF6gsJfAKDo1HkwGxWzgblYoDq0HX4KCAOLlbdbRgXNgObgd3ATGsY2xrGsCWAtuAO+Ag2CI3xsQ8T9Q3HtgBXv8anYL+ATcR+fvBf/4PCud8SMYDDaxg84GaMM8L0PtV3beGfsNSA/XUPzz4JWA4sVawINgN5gEtvg8l8fxLGJeB88FFC/2J3gEfATGgF1Gu3FAxnwRe/7jEJPxIngW/ASeBA8leWYpuANsBWtCtNHNof0tmA7mmiE0kq/lFMd3pwpvZeAQh9Jkq1zmSTNIgFvN6w9povEX8LvUpbmMyWrzfobiFSfnQQ6lYqu8nJPywwzFizWCnRwxUzUrV1xrXdhnlmjluXbVhqmnXHNZk1456ajyI9ZyaS+dCc4Rp21o7n5typ2ZugqtMrlu52R32oZmeNDp0IEufsassphV7sKM3phmbNNfRcuM3g7NoEnijpwIOXAzP1s1o0rZJe+KkAP38/OYZggh9lSEHDBaa4wDsgsvZmCW7fYwuAd8J5ua5uFB4vk4o8o+WSx+GM8dCQacl4M5KdzHkHibdcjIJhtOjSPAW6DedqCb40qCsNk8F5RlkfjZFDwRfApWmhu51kMdfAObGRIfYui6h1t3W8ANb4hPueYQCGJ9uVROA0+AO9nJIvxNDqFeDiieR+fwUCIx+wPEhYUNWUT4Xh49j3tv5vp86WtSnCQrEdTqretvwIA0vmtnJfZylUxquQFi73UOen/etZocWkXcrvYGMh1Cq3m9Is1QpYvzpQnUciSk5cAMTuJJjjpKxM8M+d0PuLy/xnmZ0oE8axlVIZdRSRf+7HNvQqoJaVmcb7wUPMqV8CuwAyzgatnLgQLrQC6Cl/CQnq6lCstPgz8C1vMb96IqbqpV7NgxTKt02JNYPrdT/C5uIHVZNFfrqMkkz7Z7E1uLGeV9D55R/qnB62mi6WlqFK2LjAP56v886FyHB+9rYRepsZNhRb44UMmJJ3nHlggs/S3UKporjQOK4yoqZrRecqCEsUd9hByo51JaYie2EhFyIMFg71JiS9b/vyMYBonmAs24I+6w4pgVzyjPdcxhO6K5S3P4FDqs2NRlH16S5UudHJA0I76Bqiff7sJK+dlklTV57mVqRdTcpBmuKgZNLuwxftZaZbWee5ma0VorDlRzh1vmYC6UMdA67InhG1k23UG2I06torlaHGhmXmiEdQAJY5JLWs/r5Unum7KqDPNOq6lVNDfbv1LKLzQvg4UhKpVs3lbmbSRm35/kmf28V8pnw2QAF1LjSWq+HI22M6SQX843gnfTGE6STz3A5JMMk/kpnl1gJc8OqOC52Dg1baTGSmq+4lB/lDG3eRMNque/DEU+h5YpPO41MCG2j2M8VSh+gc+YNGYD65jicxAqooZGq+enUWuPkOv0Zw/N+lcyqjTOtXKHNUfKgVYYvYG62q/oyZB/t2ljL9SQsH+3yedwqGRQWcjQxpuVqOZi08v+E2AAmsxCLRt7p/QAAAAASUVORK5CYII=) no-repeat center top;
            background-size: 0.38rem 0.38rem;
            vertical-align: middle;
        }
        input{
            @include flex(1);
            width: 100%;
            height: 0.6rem;
            line-height: normal;
            background-color: #fff;
            border-radius: 0.6rem;
            font-size: 0.24rem;
            padding-left:.6rem;
        }
        .search-btn{
            position: absolute;
            top: 0;
            left: .1rem;
            width: 0.5rem;
            height: 0.6rem;
            vertical-align: middle;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJwSURBVDhPlZS/a1NRFMdfXl5IFqFgB4cqHRwUOhS6ZKhgkJBXyOAg6CJSEI2D6OA/kEUHi7ppsdCpKNhRyE+IhVdIqaODSETBDgoZRBpIyEvi53vzUk1NTfOFy/fcc8/93nN/nBuyRqBQKMzbtn0D0+31eqfgWCgU2oPf0TaSyaR4JIYES6XSmW63exuxW3Sn+96ReKmG8G6/+wcHgmQ1h9AbzHPqk1mZrLY6nc6HcDjcpD9HfwG+AjtwncWXXdd9q/gBjKAyI2CVQG1xF17zPG8tm812TdRfyOfzl7UDYpbofqZlyLRsBsFA8DH0QKtGIpHziUSiLv9RqFQqMd/3K5hxWtVxnAvM8TVm6wIQuq8OfGecmEBMk6O4Tvw+3Xi73c70RxDUbQZnUk6lUpuBfyw4uxq00u9ZVwO2bJorA9Et8SRgznZgxjkGR4ZNZidkwJ/Ek4Btf2VeUztstVpn5VOGJ2Xg/CWeBNFodI95Mdlc0k+xjeO7DFYy728ScBnzYubW0+m00VGGngyEF8QTYjHgasBGcEMGq1zTE5J9HHAJUyRxTza8Y5zA5pXnEVOVOLSHVMLpYOy/4MweQTO0Epfz2jiBMtQKq4iq5JZ4l0+KxeIlMzoC2gWV9Rwzw5wftBfBmzQ4+BwIUh2/QnQKVgWsYG9TVu+xm8EFLOLTNmeIUandpVRVDD7VY2556PvK5XKz/CzrTLoYuI7CRwSXEaux0Bc5tDuOzxsSFPTiCbpJQIquspqVHwHVeBX/Dlk/I6N9YqeJ/YYvpl1J9B/Bw9BtNhqN2OCdHQZnqv9RR6XSq40VPA70R3JUTy3L2vwNRkkgJBhznzIAAAAASUVORK5CYII=) no-repeat 0.15rem 0.2rem;
            background-size: 0.2rem 0.2rem;
        }
    }
    ::-webkit-input-placeholder {
        color: #B0ACAC;
        font-size: 0.24rem;
    }
</style>
