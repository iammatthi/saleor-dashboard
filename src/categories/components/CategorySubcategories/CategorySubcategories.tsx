// @ts-strict-ignore
import { categoryAddUrl } from "@dashboard/categories/urls";
import { DashboardCard } from "@dashboard/components/Card";
import { InternalLink } from "@dashboard/components/InternalLink";
import { CategoryDetailsQuery } from "@dashboard/graphql";
import { RelayToFlat } from "@dashboard/types";
import { Box, Button } from "@saleor/macaw-ui/next";
import React from "react";
import { FormattedMessage } from "react-intl";

import { CategoryDeleteButton } from "../CategoryDeleteButton";
import { CategoryListDatagrid } from "../CategoryListDatagrid";

interface CategorySubcategoriesProps {
  categoryId: string;
  disabled: boolean;
  subcategories: RelayToFlat<CategoryDetailsQuery["category"]["children"]>;
  onCategoriesDelete: () => void;
  onSelectCategoriesIds: (ids: number[], clearSelection: () => void) => void;
}

export const CategorySubcategories = ({
  categoryId,
  subcategories,
  disabled,
  onCategoriesDelete,
  onSelectCategoriesIds,
}: CategorySubcategoriesProps) => (
  <DashboardCard>
    <DashboardCard.Title>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <FormattedMessage
          id="NivJal"
          defaultMessage="All Subcategories"
          description="section header"
        />
        <InternalLink to={categoryAddUrl(categoryId)}>
          <Button variant="secondary" data-test-id="create-subcategory">
            <FormattedMessage
              id="UycVMp"
              defaultMessage="Create subcategory"
              description="button"
            />
          </Button>
        </InternalLink>
      </Box>
    </DashboardCard.Title>

    <CategoryListDatagrid
      categories={subcategories}
      disabled={disabled}
      onSelectCategoriesIds={onSelectCategoriesIds}
      selectionActionButton={
        <Box paddingRight={5}>
          <CategoryDeleteButton onClick={onCategoriesDelete}>
            <FormattedMessage
              defaultMessage="Bulk categories delete"
              id="ZN5IZl"
            />
          </CategoryDeleteButton>
        </Box>
      }
    />
  </DashboardCard>
);
