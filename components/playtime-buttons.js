class PlaytimeButtons extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `            
            <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group-small btn-universal" role="group">
                    <button type="button" id="week-btn" class="btn btn-outline-dark btn-active" onclick="weekActive()">Week</button>
                    <button type="button" id="month-btn" class="btn btn-outline-dark" onclick="monthActive()">Month</button>
                    <button type="button" id="year-btn" class="btn btn-outline-dark" onclick="yearActive()">Year</button>
                </div>
            </div>
        `;
    }
}

customElements.define('playtime-buttons-component', PlaytimeButtons);