select 
	Month(a.CreatedDateTime),
	case when a.DSItemID>0 then b.Name else bb.Name+'|'+c.Name end,
	count(a.ID),
	sum(a.Amount)
from 
	DSTransaction a
	left join DSItem b on b.ID = a.DSItemID
	left join DSItemSub c on c.ID = a.DSItemSubID
	left join DSItem bb on bb.ID = c.DSItemID
where 
	a.DSTypeID = 2
group by
	Month(a.CreatedDateTime), a.DSItemID, b.Name, bb.Name, c.Name

-----------------------------------------------