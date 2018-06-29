export class Story {
    public id: string;
    public name: string;
    public project: string;
    public state: string;
    public release: string;
    public iteration: string;
    public owner: string;
    public estimation: string;

    constructor(id, name, project, state, release, iteration, owner, estimation) {
        this.id = id;
        this.name = name;
        this.project = project;
        this.state = state;
        this.release = release;
        this.iteration = iteration;
        this.owner = owner;
        this.estimation = estimation;
    }
}