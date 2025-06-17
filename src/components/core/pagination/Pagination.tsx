import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
  className?: string;
  previousHref: string | null;
  nextHref: string | null;
  currentPage: number;
}

export function Pagination({ className, previousHref, nextHref, currentPage }: PaginationProps) {
  return (
    <PaginationRoot className={className}>
        <PaginationContent>
            { previousHref && (
                <>
                    <PaginationItem>
                        <PaginationPrevious href={previousHref} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                </>
            )}
            <PaginationItem>
                <PaginationLink href="#" isActive>
                    {currentPage}
                </PaginationLink>
            </PaginationItem>
            { nextHref && (
                <>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href={nextHref} />
                    </PaginationItem>
                </>
            )}
        </PaginationContent>
    </PaginationRoot>
  )
}