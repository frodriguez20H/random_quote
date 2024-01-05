<template>
  <section class="quote" id="quote-box">
    <div class="quote-content" id="text">
      {{ quote.content }}
    </div>
    <div class="quote-info">
      <div class="quote-anime">
        {{ quote.anime }}
      </div>
      <div class="icons">
        <a
          class="button"
          id="tumblr-quote"
          title="Post this quote on tumblr!"
          target="_blank"
        >
          <font-awesome-icon icon="fa-brands fa-tumblr" />
        </a>
        <a
          class="button"
          id="tweet-quote"
          title="Tweet this quote!"
          target="_blank"
        >
        <font-awesome-icon icon="fa-brands fa-square-x-twitter" />
      </a>
      </div>
      <div class="quote-author" id="author">
        {{ quote.author }}
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: ["quote"],
};
</script>

<style lang="scss">
.quote {
  position: relative;
  margin: 0 auto;
  padding: 32px;
  max-width: 720px;

  &-content {
    position: relative;
    font-family: "Playpen Sans", cursive;
    font-size: 28px;
    font-weight: 600;
    background-color: var(--dark);
    color: var(--light);
    padding: 48px 32px;
    border-radius: 16px;

    &:before,
    &:after {
      content: '"';
      color: var (--grey);
      margin: 0px 2px;
    }
  }
  &-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 32px;

    .quote-author,
    .quote-anime,
    .icons {
      position: absolute;
      padding: 12px 16px;
      font-family: "Josefin Sans", sans-serif;
      font-size: 24px;
      font-weight: 700;
      border-radius: 99px;
      color: var(--light);
      text-align: center;
    }

    .quote-author {
      top: calc(100% - 32px);
      right: 0;
      transform: translateY(-50%);
      background-color: var(--secondary);
    }

    .quote-anime {
      top: 0px;
      left: 0px;
      background-color: var(--tertiary);
      color: var(--dark);
    }

    .icons {
      width: 64px;
      top: calc(100% - 4em);
      left: 1.5em;
      display: flex;
      & .button {
        height: 40px;
        border: none;
        border-radius: 3px;
        color: var(--dark);
        background-color: var(--light);
        outline: none;
        padding: 8px 8px 6px 8px;
        margin-right: 10px;
        margin-top: 6px;
        opacity: 1;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
}
</style>