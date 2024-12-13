

export default function ChooseTentAmount() 
{
    return (
        <div className="container tent-amount-chooser-container flex gap-4 mb-4">
           <div>
               <label htmlFor="two_person_tents" className="block cursor-pointer">2P:</label>
               <input type="number" className="tent-amount-input two-person-tents-amount-input rounded-md indent-[10px] ring-2 ring-orange-200 transition-ring duration-150 ease-in focus:outline-none focus:ring-2 focus:ring-orange-300" id="two_person_tents" placeholder="Enter tent amount"/>
           </div>

           <div>
               <label htmlFor="three_person_tents" className="block cursor-pointer">3P:</label>
               <input type="number" className="tent-amount-input two-person-tents-amount-input rounded-md indent-[10px] ring-2 ring-orange-200 transition-ring duration-150 ease-in focus:outline-none focus:ring-2 focus:ring-orange-300" id="three_person_tents" placeholder="Enter tent amount" />
           </div>
        </div>
    ) 
}