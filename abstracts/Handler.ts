export abstract class Handler {
    protected successor : Handler;

    public abstract processNumber(number : string) : string;

    public setSuccessor(successor : Handler) {
        this.successor = successor;
    }
}