<template>
    <main>
        <!-- swipe -->
        <section>
            <h1 class="page-title">
            <span>Yep-Touch</span>
            <router-link class="page-back router-link-active" to="/">
                返回
                <i class="Yepui Yepui-back"></i>
            </router-link>
        </h1>

            <figure class="code-wrap"
                    v-touch:swipeleft="handleSwipeleft"
                    v-touch:swiperight="handleSwiperight"
                    v-touch:swipeup="handleSwipeup"
                    v-touch:swipedown="handleSwipedown"
                    v-touch:press="handlePress"
            >
            <pre>
                <code class="js">
            try to swipe

v-touch:swipeleft="handleSwipeleft"
v-touch:swiperight="handleSwiperight"
v-touch:swipeup="handleSwipeup"
v-touch:swipedown="handleSwipedown"
v-touch:press="handlePress"
                </code>
            </pre>
            </figure>
        </section>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
.js {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #f0f0f0;
}

.js,
.js-subst {
  color: #444;
}

.js-comment {
  color: #888888;
}

.js-keyword,
.js-attribute,
.js-selector-tag,
.js-meta-keyword,
.js-doctag,
.js-name {
  font-weight: bold;
}

.js-type,
.js-string,
.js-number,
.js-selector-id,
.js-selector-class,
.js-quote,
.js-template-tag,
.js-deletion {
  color: #880000;
}

.js-title,
.js-section {
  color: #880000;
  font-weight: bold;
}

.js-regexp,
.js-symbol,
.js-variable,
.js-template-variable,
.js-link,
.js-selector-attr,
.js-selector-pseudo {
  color: #bc6060;
}

.js-literal {
  color: #78a960;
}

.js-built_in,
.js-bullet,
.js-code,
.js-addition {
  color: #397300;
}

.js-meta {
  color: #1f7199;
}

.js-meta-string {
  color: #4d99bf;
}

.js-emphasis {
  font-style: italic;
}

.js-strong {
  font-weight: bold;
}

h1 {
  margin-bottom: 1em;
  font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

h1,
h2 {
  color: #2c3e50;
  font-weight: 300;
  text-align: center;
}

h2 {
  font-size: 20px;
}

header {
  .logo {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin: 20px auto 40px;
    position: relative;
    border-radius: 50%;
    color: #41b883;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
  }

  .logo:hover {
    margin: 10px auto 30px;
    padding: 30px;
    width: 150px;
    height: 150px;
  }
  .logo .fa-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

section {
  .title {
    position: relative;
    button,
    a {
      position: absolute;
      right: 20px;
      top: 0;
      display: block;

      margin: 0 auto;
    }
  }
  figure .fa-icon {
    display: block;
  }

  p small {
    font-size: 0.8em;
    color: #7f8c8d;
  }

  .code-wrap {
    padding: 0 18px 0 18px;
    text-align: center;
  }

  pre {
    font-family: "Roboto Mono", Monaco, courier, monospace;
    text-align: left;
    font-size: 0.25rem;
  }
}

footer {
  margin: 5em 0 3em;
  font-size: 0.5em;
  vertical-align: middle;
  text-align: center;
}

footer a {
  display: inline-block;
  margin: 0 5px;
  padding: 3px 0 6px;
  color: #7f8c8d;
  font-size: 2em;
  text-decoration: none;
}

footer a:hover {
  padding-bottom: 3px;
  border-bottom: 3px solid #42b983;
}

.alert {
  color: #c33;
  opacity: 0.8;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSwipeleft() {
      alert('左滑了');
    },
    handleSwiperight() {
      alert('右滑了');
    },
    handleSwipeup() {
      alert('上滑了');
    },
    handleSwipedown() {
      alert('下滑了');
    },
    handlePress() {
      alert('按住了');
    },
  },
  mounted() {},
  components: {},
};

</script>
