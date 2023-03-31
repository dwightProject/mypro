<template>
  <div style="border: 1px solid #ccc;" class="editor-box">
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <!--        @customAlert="customAlert"-->
    <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
        @onChange="onChange"
        @onDestroyed="onDestroyed"
        @onMaxLength="onMaxLength"
        @onFocus="onFocus"
        @onBlur="onBlur"
        @customPaste="customPaste"
        @click.native = 'clickFun'
    />
  </div>
</template>

<script>
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'

export default {
  name: 'editor-box',
  components: {Editor, Toolbar},
  data() {
    return {
      editor: null,
      html: '',
      toolbarConfig: {},
      editorConfig: {placeholder: '请输入...', maxLength: 10},
      mode: 'simple', // or 'simple'
    }
  },
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  created() {
    this.html = this.content
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor)
      console.log('onCreated', editor)
    },
    onChange(editor) {
      console.log('onChange', editor.children)
      this.$emit('changeData', this.html)
    },
    onDestroyed(editor) {
      console.log('onDestroyed', editor)
    },
    onMaxLength(editor) {
      console.log('onMaxLength', editor)
    },
    onFocus(editor) {
      console.log('onFocus', editor)
    },
    clickFun(){

    },
    onBlur(editor) {
      console.log('onBlur', editor)
    },
    // customAlert(info: string, type: string) { window.alert(`customAlert in Vue demo\n${type}:\n${info}`) },
    customPaste(editor, event, callback) {
      console.log('ClipboardEvent 粘贴事件对象', event)
      // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
      // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
      // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

      // 自定义插入内容
      editor.insertText('xxx')

      // 返回 false ，阻止默认粘贴行为
      event.preventDefault()
      callback(false) // 返回值（注意，vue 事件的返回值，不能用 return）

      // 返回 true ，继续默认的粘贴行为
      // callback(true)
    },
  },
  mounted() {

  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>