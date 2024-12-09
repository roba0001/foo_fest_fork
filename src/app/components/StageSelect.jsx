export default function StageSelect() 
{
    return (
        <select className="outline-none">
            <option value="Select Stage" disabled selected>Select Stage</option>
            <hr />
            <option value="Stage 1">Stage 1</option>
            <option value="Stage 2">Stage 2</option>
            <option value="Stage 3">Stage 3</option>
            <option value="Stage 4">Stage 4</option>
        </select>
    ) 
}