export function goUpComponent(target) {
  const elTemplate = `
    <div class="go-up">
        <button class="go-up__button>^</button>
    </div>
    `;
  target.appendChild(elTemplate);
}
