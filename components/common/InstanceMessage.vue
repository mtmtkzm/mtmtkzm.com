<template>
  <form
    class="instance-message"
    name="instance-message"
    netlify-honeypot="bot-field"
    :action="`${$route.path}?sent-instance-message`"
    data-netlify="true"
    method="post"
  >
    <input type="hidden" name="form-name" value="instance-message"/>
    <textarea
      v-model="message"
      name="message"
      placeholder="Say Hello!"
    >
    </textarea>
    <div class="instance-message-footer">
      <button
        class="instance-message-submit"
        type="submit"
        v-bind:disabled="(message.length < 1)"
      >
        <AppIcon name="send"/>
        <span>Submit</span>
      </button>
      <p>匿名のため返信はありません</p>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    },
  };
</script>

<style scoped lang="postcss">
  .instance-message {
    width: 100%;

    textarea {
      width: 100%;
      height: 120px;
      padding: 15px;
      box-sizing: border-box;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 0;
      outline: none;
      color: #fff;
      font-family: unset;
      font-size: 16px;
      letter-spacing: 0.05em;
    }
  }

  .instance-message-footer {
    display: flex;
    align-items: center;

    p {
      font-size: 12px;
      margin-left: 12px;
      line-height: 1.1;
    }
  }

  .instance-message-submit {
    display: flex;
    align-items: center;
    color: #fff;
    fill: #fff;
    background-color: transparent;
    padding: 10px 20px;
    font-family: unset;
    font-size: 14px;
    letter-spacing: 0.05em;
    border: 1px solid #fff;
    outline: none;
    cursor: pointer;
    transition: opacity var(--base-transition);

    &:focus {
      .app-icon {
        transform: rotate(45deg);
        margin-right: 12px;
      }
    }

    .app-icon {
      fill: inherit;
      margin-right: 5px;
      width: 14px;
      height: 14px;
      transition: all var(--base-transition);
    }

    &[disabled] {
      opacity: .5;
      cursor: not-allowed;
    }
  }
</style>
