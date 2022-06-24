<template>
  <div class="accent-rules-container">
    <div class="accent-rule rule-1"></div>
    <div class="accent-rule rule-2"></div>
    <div class="accent-rule rule-3"></div>
    <div class="accent-rule rule-4"></div>
    <div class="accent-rule rule-5"></div>
  </div>
</template>

<style scoped>
/* ALIGNED TO LEFT */
/* ---------------- */
.left-align.accent-rules-container {
  display: grid;
  width: 15rem;
  grid-template-columns: 0.2fr 5fr 1.85fr 1.25fr;
  grid-template-rows: repeat(5, 1fr);
}

.left-align .accent-rule {
  margin-bottom: 1rem;
  height: 0.125rem;
  background: repeating-linear-gradient(
    to left,
    var(--color-accent-medium-light) 0,
    var(--color-accent-medium-light) 0.75rem,
    transparent 0.75rem,
    transparent 1.5rem
  );
}
.left-align .rule-1,
.left-align .rule-5 {
  grid-column: 1 / 3;
}

.left-align .rule-2,
.left-align .rule-4 {
  grid-column: 1 / 4;
}

.left-align .rule-3 {
  grid-column: 1 / -1;
}

/* ALIGNED TO RIGHT */
/* -------------  */
.right-align.accent-rules-container {
  display: grid;
  width: 15rem;
  grid-template-columns: 1fr 1.75fr 4fr 0.25fr;
  grid-template-rows: repeat(5, 1fr);
}
.right-align .accent-rule {
  margin-bottom: 1rem;
  height: 0.125rem;
  background: repeating-linear-gradient(
    to right,
    var(--color-accent-medium-light) 0,
    var(--color-accent-medium-light) 0.75rem,
    transparent 0.75rem,
    transparent 1.5rem
  );
}
.right-align .rule-1,
.right-align .rule-5 {
  grid-column: 3 / -2;
}

.right-align .rule-2,
.right-align .rule-4 {
  grid-column: 2 / -2;
}

.right-align .rule-3 {
  grid-column: 1 / -2;
}

/* ALIGNED TO TOP */
/* ---------------- */
.top-align.accent-rules-container {
  display: grid;
  height: 15rem;
  width: 8rem;
  grid-template-rows: 0.2fr 5fr 1.85fr 1.25fr;
  grid-template-columns: repeat(5, 1fr);
}

.top-align .accent-rule {
  margin-bottom: 1rem;
  width: 0.125rem;
  background: repeating-linear-gradient(
    to bottom,
    var(--color-accent-light) 0,
    var(--color-accent-light) 0.75rem,
    transparent 0.75rem,
    transparent 1.5rem
  );
}
.top-align .rule-1,
.top-align .rule-5 {
  grid-row: 1 / 3;
}

.top-align .rule-2,
.top-align .rule-4 {
  grid-row: 1 / 4;
}

.top-align .rule-3 {
  grid-row: 1 / -1;
}

/* ALIGNED TO BOTTOM */
/* ---------------- */
.bottom-align.accent-rules-container {
  display: grid;
  height: 15rem;
  width: 8rem;
  grid-template-rows: 1fr 1.75fr 4fr 0.25fr;
  grid-template-columns: repeat(5, 1fr);
}

.bottom-align .accent-rule {
  margin-bottom: 1rem;
  width: 0.125rem;
  background: repeating-linear-gradient(
    to top,
    var(--color-accent-light) 0,
    var(--color-accent-light) 0.75rem,
    transparent 0.75rem,
    transparent 1.5rem
  );
}
.bottom-align .rule-1,
.bottom-align .rule-5 {
  grid-row: 3 / -2;
}

.bottom-align .rule-2,
.bottom-align .rule-4 {
  grid-row: 2 / -2;
}

.bottom-align .rule-3 {
  grid-row: 1 / -2;
}

/* Flex option */
/* .accent-rules-container {
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-end;
  width: 400px;
}
.accent-rule {
  margin-bottom: 0.5em;
  height: 0.15rem;
  background: repeating-linear-gradient(
    to right,
    var(--color-accent-medium-light) 0,
    var(--color-accent-medium-light) 1rem,
    transparent 1rem,
    transparent 2rem
  );
}

.rule-1,
.rule-5 {
  width: 75%;
}

.rule-2,
.rule-4 {
  width: 90%;
}

.rule-3 {
  width: 99%;
} */
</style>
