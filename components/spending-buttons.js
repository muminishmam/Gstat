class SpendingButtons extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `            
            <div class="btn-toolbar btn-universal" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group-small" role="group">
                    <button type="button" id="spend-week-btn" class="btn btn-outline-dark btn-active" onclick="spendWeekActive()">Week</button>
                    <button type="button" id="spend-month-btn" class="btn btn-outline-dark" onclick="spendMonthActive()">Month</button>
                    <button type="button" id="spend-year-btn" class="btn btn-outline-dark" onclick="spendYearActive()">Year</button>
                </div>
            </div>
        `;
    }
}

customElements.define('spending-buttons-component', SpendingButtons);