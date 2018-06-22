export class Defect {
    public name: string;
    public description: string;
    public state: string;
    public project: string;
    public assignee: string;

    constructor(name, desc, state, project, assignee){
        this.name = name;
        this.description = desc;
        this.state = state;
        this.project = project;
        this.assignee = assignee;
    }
}