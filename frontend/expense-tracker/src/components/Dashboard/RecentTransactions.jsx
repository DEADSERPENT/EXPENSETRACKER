import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import moment from 'moment';
import TransitionInfoCard from '../Cards/TransitionInfoCard';


const RecentTransactions = ({transactions, onSeeMore}) => {
  return (
    <div className="card">
        <div className="flex items-center justify-between">
            <h5 className="text-lg">Recent Transactions</h5>

            <button className="card-btn" onClick={onSeeMore}>
                See All <LuArrowRight className="text-base" /> 
            </button>
        </div>

        <div className="mt-6">
            {transactions?.slice(0,5)?.map((item) => (
                <TransitionInfoCard
                    key={item._id}
                    title={item.type === 'expense' ? item.category : item.source}
                    icon={item.icon}
                    date={moment(item.date).format("DD-MM-YYYY")}
                    amount={item.amount}
                    type={item.type}
                    hideDeleteBtn
                />
            ))}
        </div>
    </div>
  )
}

export default RecentTransactions