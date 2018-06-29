export class Defect {
    public id: string;
    public description: string;
    public state: string;
    public project: string;
    public assignee: string;

    constructor(id, desc, state, project, assignee){
        this.id = id;
        this.description = desc;
        this.state = state;
        this.project = project;
        this.assignee = assignee;
    }
}